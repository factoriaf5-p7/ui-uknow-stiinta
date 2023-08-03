import { CreateCourse } from '@/types/createCourse.types';
import { BuyCourse } from '@/types/buyCourse.types';
import axiosClient  from '../apiClient';

export function getCourses(){
    return axiosClient.get('/courses');
}

export function getCourse(id: string){
    return axiosClient.get(`/courses/${id}`);
}

export function createCourse(id:string,newCourse:CreateCourse){
    return axiosClient.post(`/courses/create/${id}`,newCourse);
}

export function buyCourse(buyCourse: BuyCourse) {
    const headers = {
      'Content-Type': 'application/json',
    };
  
    return axiosClient.patch('courses/purchase', buyCourse, { headers });
  }

