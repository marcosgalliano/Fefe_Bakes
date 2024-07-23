import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
} from '../../redux/actions/courseActions';

const ManageCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);

    // Estado para manejar la creación y actualización de cursos
    const [courseData, setCourseData] = useState({
        id: '',
        name: '',
        description: '',
        // Agrega aquí más campos según lo que necesites para el curso
    });

    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    // Manejar la creación de un curso
    const handleCreateCourse = (e) => {
        e.preventDefault();
        dispatch(createCourse(courseData));
        setCourseData({ id: '', name: '', description: '' }); // Reiniciar el formulario
    };

    // Manejar la actualización de un curso
    const handleUpdateCourse = (e) => {
        e.preventDefault();
        dispatch(updateCourse(courseData.id, courseData));
        setCourseData({ id: '', name: '', description: '' }); // Reiniciar el formulario
    };

    // Manejar la eliminación de un curso
    const handleDeleteCourse = (courseId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            dispatch(deleteCourse(courseId));
        }
    };

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Manejar la carga de datos del curso para la actualización
    const handleEditCourse = (course) => {
        setCourseData(course);
    };

    return (
        <div>
            <h1>Administrar Cursos</h1>

            {/* Formulario para crear o actualizar un curso */}
            <form onSubmit={courseData.id ? handleUpdateCourse : handleCreateCourse}>
                <h2>{courseData.id ? 'Actualizar Curso' : 'Crear Curso'}</h2>
                <div>
                    <label htmlFor="name">Nombre del Curso:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={courseData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={courseData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{courseData.id ? 'Actualizar Curso' : 'Crear Curso'}</button>
            </form>

            {/* Lista de cursos */}
            <h2>Lista de Cursos</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                        <button onClick={() => handleEditCourse(course)}>Editar</button>
                        <button onClick={() => handleDeleteCourse(course.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageCourses;
