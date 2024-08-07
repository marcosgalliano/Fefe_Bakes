import axiosInstance from '../../axiosConfig'; 

import {
    GET_ALL_COURSES,
    CREATE_COURSE,
    UPDATE_COURSE,
    DELETE_COURSE,
} from '../actionTypes';

// Acción para obtener todos los cursos
export const getAllCourses = () => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.get('/api/courses/getall'); // Poner la URL de la API correcta
            dispatch({ type: GET_ALL_COURSES, payload: response.data });
        } catch (error) {
            console.error('Error al obtener los cursos:', error);
        }
    };
};

// Acción para crear un curso
export const createCourse = (courseData) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post('/api/courses/create', courseData); // Poner la URL de la API correcta
            dispatch({ type: CREATE_COURSE, payload: response.data });
        } catch (error) {
            console.error('Error al crear el curso:', error);
        }
    };
};

// Acción para actualizar un curso
export const updateCourse = (courseId, courseData) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.put(`/api/courses/${courseId}`, courseData); // Poner la URL de la API correcta
            dispatch({ type: UPDATE_COURSE, payload: response.data });
        } catch (error) {
            console.error('Error al actualizar el curso:', error);
        }
    };
};

// Acción para eliminar un curso
export const deleteCourse = (courseId) => {
    return async (dispatch) => {
        try {
            await axiosInstance.delete(`/api/courses/${courseId}`); // Poner la URL de la API correcta
            dispatch({ type: DELETE_COURSE, payload: courseId });
        } catch (error) {
            console.error('Error al eliminar el curso:', error);
        }
    };
};
