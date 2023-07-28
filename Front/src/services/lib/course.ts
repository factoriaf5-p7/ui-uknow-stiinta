import { Course } from '@/types/course.types';
import axiosClient  from '../apiClient';

export function getCourses(){
    return axiosClient.get('/courses');
}

export function getCourse(id: string){
    return axiosClient.get(`/courses/${id}`);
}

export function createCourse(course: Course){
    return axiosClient.post('/courses', JSON.stringify(course));
}

