import { CreateCourse } from '@/types/createCourse.types';
import axiosClient  from '../apiClient';

export function getCourses(){
    return axiosClient.get('/courses/average');
}

export function getCourse(id: string){
    return axiosClient.get(`/courses/${id}`);
}

export function createCourse(course: CreateCourse){
    return axiosClient.post('/courses', JSON.stringify(course));
}

