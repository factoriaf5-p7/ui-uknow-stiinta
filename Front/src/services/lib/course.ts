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

export function getBought(id: string){
    return axiosClient.get(`/courses/bought-courses/${id}`);
}
export function getCreated(id: string){
    return axiosClient.get(`/courses/created-courses/${id}`);
}

export function buyCourse(buyCourse: BuyCourse) {
    const headers = {
      'Content-Type': 'application/json',
    };

    

  
    return axiosClient.patch('courses/purchase', buyCourse, { headers });
  }

