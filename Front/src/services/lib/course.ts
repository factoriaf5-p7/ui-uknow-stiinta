import { CreateCourse } from '@/types/createCourse.types';
import { BuyCourse } from '@/types/buyCourse.types';
import axiosClient  from '../apiClient';

export function getCourses(){
    return axiosClient.get('/courses');
}

export function getCourse(id: string){
    return axiosClient.get(`/courses/${id}`);
}

export function createCourse(course: CreateCourse){
    return axiosClient.post('/courses', JSON.stringify(course));
}

export function buyCourse(buyCourse: BuyCourse){
    return axiosClient.put('courses/purchase', JSON.stringify(buyCourse));
}

