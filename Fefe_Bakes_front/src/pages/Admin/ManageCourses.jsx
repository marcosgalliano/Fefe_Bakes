import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
} from '../../redux/actions/courseActions';
import Header from '../../components/Header/Header';
import './Admin.css';

const ManageCourses = () => {
    const dispatch = useDispatch();
    const coursesData = useSelector((state) => state.courses || []); // Evita errores si courses es undefined
    const courses = coursesData.data || []; // Accede a los cursos dentro de `data`

    const [courseData, setCourseData] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        image: null,
    });

    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    const handleCreateCourse = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', courseData.name);
        formData.append('description', courseData.description);
        formData.append('price', courseData.price);
        if (courseData.image) {
            formData.append('image', courseData.image);
        }
        dispatch(createCourse(formData));
        setCourseData({ id: '', name: '', description: '', price: '', image: null });
    };

    const handleUpdateCourse = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', courseData.name);
        formData.append('description', courseData.description);
        formData.append('price', courseData.price);
        if (courseData.image) {
            formData.append('image', courseData.image);
        }
        dispatch(updateCourse(courseData.id, formData));
        setCourseData({ id: '', name: '', description: '', price: '', image: null });
    };

    const handleDeleteCourse = (courseId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            dispatch(deleteCourse(courseId));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setCourseData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));
    };

    const handleEditCourse = (course) => {
        setCourseData({
            id: course.id,
            name: course.name,
            description: course.description,
            price: course.price,
            image: course.image,
        });
    };

    console.log(courses); // Verifica la estructura de courses

    return (
        <> 
        <Header />
        <div className='container-cursos'>
            <h1>Administrar Cursos</h1>

            <form className='form-curso' onSubmit={courseData.id ? handleUpdateCourse : handleCreateCourse}>
                <h2>{courseData.id ? 'Actualizar Curso' : 'Crear Curso'}</h2>
                <div className='form-group-admin'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={courseData.name}
                        onChange={handleChange}
                        required
                        placeholder='Nombre del Curso'
                    />
                </div>
                <div className='form-group-admin'>
                    <textarea
                        id="description"
                        name="description"
                        value={courseData.description}
                        onChange={handleChange}
                        required
                        placeholder='Descripción'
                    />
                </div>
                <div className='form-group-admin'>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={courseData.price}
                        onChange={handleChange}
                        required
                        placeholder='Precio'
                    />
                </div>
                <div className='form-group-admin'>
                    <p> Agregar una imagen de portada</p>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className='btn-submit'>{courseData.id ? 'Actualizar Curso' : 'Crear Curso'}</button>
            </form>

            <h2 className='list-courses-h2'>Lista de Cursos</h2>
            <div>
                {Array.isArray(courses) && courses.length > 0 ? (
                    courses.map(course => (
                        <div className='product-card' key={course.id}>
                            <p className='product-image-course'>{course.image} </p>
                            <h4 className='product-title-course'>{course.title}</h4>
                            <p className='product-description-course'>{course.description}</p>
                            <p className='product-price-course'>{course.price}</p>
                            <div className="card-flex-course">
                                <button onClick={handleEditCourse} className="btn-edit-course">Editar</button>
                                <button onClick={handleDeleteCourse} className="btn-delete-course">Eliminar</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron cursos</p>
                )}
            </div>
        </div>
        </>
    );
};

export default ManageCourses;