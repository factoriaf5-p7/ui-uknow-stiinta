import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model, ObjectId } from 'mongoose';
import { UsersService } from '../users/users.service';
import { RatedCourseDto } from './dto/rate-course.dto';
import { PurchaseCourseDto } from './dto/buy-course.dto';
import { log } from 'console';

@Injectable()
export class CoursesService {
	prototype(prototype: any, arg1: string) {
		throw new Error('Method not implemented.');
	}
	constructor(
    private readonly userService: UsersService,
    @InjectModel(Course.name) private courseModel: Model<Course>,
	) {}

	async create(userId: ObjectId, createCourseDto: CreateCourseDto) {
		try {
			const newCourse = await this.courseModel.create(createCourseDto);
			this.userService.addCreatedCourse(userId, newCourse._id);
             
			return {
				message: 'New course created successfully.',
				status: HttpStatus.OK,
				data: newCourse,
			};
		} catch (error) {
			throw error;
		}
	}

	async findAll() {
		try {
			const allCourses = await this.courseModel.find();

			const data = await this.findAllSortedByAverage();
			const coursesAverage = data.data;
			// console.log(coursesAverage);

			const coursesToUpdate = allCourses.filter((course) => course.bought); // Filtrar los cursos comprados

			// Actualizar los cursos con el campo "average" si corresponde
			for (const course of coursesToUpdate) {
				const matchingCourse = coursesAverage.find((c) => c._id.toString() === course._id.toString());
				if (matchingCourse) {
					console.log(`Updating course ${course._id} with average ${matchingCourse.average}`);
					await this.courseModel.updateOne({ _id: course._id }, { $set: { average: matchingCourse.average } });
				}
			}
			return {
				message: 'All courses retrieved successfully',
				status: HttpStatus.OK,
				data: allCourses,
			};
		} catch (error) {
			throw error;
		}
	}

	async findBoughtCourses(id: ObjectId) {
		try {
			const { message, status, data } = await this.userService.findOneWithBoughtCourses(id);
	
			const boughtCourses = [];

			const entries = Object.entries(data.bought_courses);
			console.log(entries);

			entries.forEach(course=> { 
				boughtCourses.push({ _id: course[1].course_id['_id'] ,name: course[1].course_id.name });
			});

			return {
				message: 'Retrieved all courses purchased by user successfully',
				status: HttpStatus.OK,
				data: boughtCourses
			};
		} catch (error) {
			throw error;
		}
	}

	async addRating(userId: ObjectId, ratedCourse: RatedCourseDto) {
		try {
			const { data, message, status } = await this.userService.addRating(
				userId,
				ratedCourse,
			);

			return {
				message: 'Course rated successfully',
				status: HttpStatus.OK,
				data: data,
			};
		} catch (error) {
			throw error;
		}
	}

	async searchAdmin(filters: string, keywords: string){
		try {
			let allCourses = [];
			const arrFilters = filters.split(',');
			let regex;
			
			for await (const filter of arrFilters) {
				if (filter !== 'price'){
					regex = new RegExp(keywords, 'i');
				} else if(!isNaN(+keywords)) {
					regex = +keywords;
				}
				allCourses.push(...await this.courseModel.find({ [filter] : regex }));
			}

			allCourses = allCourses.flat(Infinity);

			const hash = {};
			const filteredCourses = allCourses.filter(course =>{
				return hash[course._id] ? false : hash[course._id] = true;
			});

			return {
				message: 'Retrieved filtered courses successfully',
				status: HttpStatus.OK,
				data: filteredCourses
			};
		} catch (error) {
			throw error;
		}
	}

	async findAllSortedByAverage() {
		const calculates = [];
		const idCoursesAll = await this.courseModel.find({}, { _id: 1, name: 1 }); //id de todos los cursos
		const { data, message, status } = await this.userService.findAllBoughtCourses({},{ bought_courses: 1, _id: 0 }); //cursos comprados de cada usuario

		// return 'This action find all users';
		// const courses = this.courseModel.find();
		idCoursesAll.forEach((course) => {
			const courseId = course._id;
			let totalStars = 0;
			let numRating = 0;

			// Buscar las puntuaciones del curso
			data.forEach((boughtCourses) => {
				const bcourses = Array.from(boughtCourses.bought_courses);
				bcourses.forEach((courseObj) => {
					if (String(courseObj.course_id) === String(courseId)) {
						totalStars += courseObj.stars;
						numRating++;
					}
				});
			});
			calculates.push({
				_id: courseId,
				name: course.name,
				totalStars,
				numRating,
			});
		});

		const hash = {};
		const filteredCourses = calculates.filter((course) => {
			return hash[course._id] || course.numRating === 0
				? false
				: (hash[course._id] = true);
		});

		filteredCourses.map((course) => {
			if (course.numRating > 0) {
			  // Verificar que totalStars sea un número válido
			  if (!Number.isNaN(course.totalStars)) {
					course.average = course.totalStars / course.numRating;
					course.average = Number(course.average.toFixed(2));
			  } else {
				// Si totalStars no es un número válido, establecer average en 0 o algún otro valor predeterminado
					course.average = 0;
			  }
			} else {
			  course.average = 0;
			}
		  });

		const sortedCourses = filteredCourses.sort((a, b) => b.average - a.average);

		//   respuesta
		return {
			message: 'Retrieved all courses succesfully',
			status: 200,
			data: sortedCourses,
		};
	}

	async findCreatedCourses(userId: ObjectId) {
		const { data, message, status } =
      await this.userService.findOneWithCreatedCourses(userId);

		const createdCourses = [];

		const entries = Object.entries(data.created_courses);
		entries.forEach((course) => {
			createdCourses.push({ _id: course[1]._id, name: course[1].name });
		});

		return {
			message: 'Retrieved all created courses successfully',
			status: HttpStatus.OK,
			data: createdCourses,
		};
	}

	async findCoursesCollectionById(courseId: ObjectId[]) {
		return await Promise.all(
			courseId.map(
				async (courseId) => await this.courseModel.findById(courseId),
			),
		);
	}

	async search(filters: string, keywords: string) {
		try {
			let allCourses = [];
			let regex;
			const arrFilters = filters.split(',');

			for await (const filter of arrFilters) {
				if (filter !== 'price'){
					regex = new RegExp(keywords, 'i');
				} else if(!isNaN(+keywords)) {
					regex = +keywords;
				}
				allCourses.push(...await this.courseModel.find({ [filter] : regex }).select('_id name'));
			}

			allCourses = allCourses.flat(Infinity);

			const hash = {};
			const filteredCourses = allCourses.filter((course) => {
				return hash[course._id] ? false : (hash[course._id] = true);
			});

			return {
				message: 'Retrieved filtered courses successfully',
				status: HttpStatus.OK,
				data: filteredCourses,
			};
		} catch (error) {
			throw error;
		}
	}

	async findOne(id: ObjectId) {
		try {
			const course = await this.courseModel.findById(id);
			return {
				message: 'Course retrieved successfully',
				status: HttpStatus.OK,
				data: course,
			};
		} catch (error) {
			throw error;
		}
	}

	async findOneAdmin(id: ObjectId) {
		try {
			const course = await this.courseModel.findById(id);
			return {
				message: 'Course retrieved successfully',
				status: HttpStatus.OK,
				data: course
			};
			
		} catch (error) {
			throw error;
			
		}
	}

	async update(id: ObjectId, updateCourse: UpdateCourseDto) {
		try {
			// user que quiere actualizar curso
			const { data, message, status } = await this.userService.findOne(id);
			
			const entries = Object.entries(data.created_courses);
			let courseUpdated;

			entries.forEach(async( course) => {
				console.log(course[1]._id);
				if (String(updateCourse._id) === String(course[1]._id)) {
					console.log('actualizando');
					courseUpdated = await this.courseModel.findOneAndUpdate(
						{ _id: updateCourse._id },
						{
							...updateCourse,
						},
					);
				} else {
					throw new Error('Course not found');
				}
			});
			return {
				message: 'Course updated successfully',
				status: HttpStatus.OK,
				data: courseUpdated,
			};
		} catch (error) {
			throw error;
		}
	}

	async deleteCourse(id: ObjectId) {
		try {
			const course = await this.courseModel.findOne({ _id: id });

			if (course) {
				if (course.bought)
					throw new HttpException(
						'Course cannot be deleted.',
						HttpStatus.UNAUTHORIZED,
					);

				await this.courseModel.deleteOne({ _id: id });

				return {
					message: 'Course deleted.',
					status: HttpStatus.OK,
					data: '',
				};
			} else {
				throw new HttpException('Course not found.', HttpStatus.NOT_FOUND);
			}
		} catch (error) {
			throw error;
		}
	}
	async findAllSortedByPriceDesc() {
		try {
			const coursesByPrice = await this.courseModel.find().sort({ price: -1 });
			return {
				message: 'All courses retrieved successfully',
				status: HttpStatus.OK,
				data: coursesByPrice,
			};
		} catch (error) {
			throw error;
		}
	}

	async deleteCourseByAdmin(id: ObjectId) {
		try {
			const course = await this.courseModel.findOne({ _id: id });
			if (course) {
				await this.courseModel.deleteOne({ _id: id });
				return {
					message: 'Course deleted by admin',
					status: HttpStatus.OK,
					data: '',
				};
			} else {
				throw new HttpException('Course not found.', HttpStatus.NOT_FOUND);
			}
		} catch (error) {
			throw error;
		}
	}

	async purchaseCourse(purchaseCourseDto: PurchaseCourseDto) {
		try{
			const user = (await this.userService.findOne(purchaseCourseDto.userId)).data;
			
			const course = await this.courseModel.findOne({ _id: purchaseCourseDto.courseId });
			
			if (user.wallet_balance < course.price) {
				throw new HttpException('INSUFFICIENT_BALANCE', HttpStatus.FORBIDDEN);
			} else {
				if (!course.bought) {
					await this.courseModel.findOneAndUpdate(
						{ _id: course._id },
						{ bought: true },
					);
					
				}
				user.wallet_balance -= course.price;
				log(user.wallet_balance);
				const object = {
					wallet: user.wallet_balance,
					course_id: course.id,
					stars: undefined,
					commented: false
				};
				await this.userService.updateUserBoughtCourses(user._id, object);

				return {
					message: 'Course purchased.',
					status: HttpStatus.OK,
					data: object
				};
			}

		}catch (error){
			throw error;
		}
	}
}