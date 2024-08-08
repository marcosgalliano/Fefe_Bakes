import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, deleteCourse } from '../../redux/actions/courseActions';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Admin.css';

const ManageCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses?.data || []);

    // Estado para controlar la vista de cursos (todos o destacados)
    const [showFeatured, setShowFeatured] = useState(false);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    // Solo actualizar `filteredCourses` cuando los cursos o `showFeatured` cambien
    useEffect(() => {
        if (courses.length > 0) {
            const filtered = showFeatured ? courses.filter(course => course.isFeatured) : courses;
            setFilteredCourses(filtered);
        }
    }, [courses, showFeatured]);

    const toggleFeatured = (courseId) => {
        setFilteredCourses((prevCourses) =>
            prevCourses.map((course) =>
                course.id === courseId ? { ...course, isFeatured: !course.isFeatured } : course
            )
        );
    };

    const handleDeleteCourse = (courseId) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            dispatch(deleteCourse(courseId));
        }
    };

    const handleShowFeatured = () => setShowFeatured(true);
    const handleShowAll = () => setShowFeatured(false);

    return (
        <>
            <Header />
            <div className="container-cursos">
                <h1>Administrar Cursos</h1>
                <Link to="/admin/cursos/crear">Crear</Link>
                <div className="admin-utils">
                    <h4 onClick={handleShowFeatured} className={showFeatured ? 'active' : ''}>Destacados</h4>
                    <h4 onClick={handleShowAll} className={!showFeatured ? 'active' : ''}>Productos</h4>
                    <h4>Estadísticas</h4>
                </div>

                <h2 className="list-courses-h2">Lista de Cursos</h2>
                <div>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div className="product-card" key={course.id}>
                                <p className="product-image-course">{course.image}</p>
                                <h4 className="product-title-course">{course.title}</h4>
                                <p className="product-description-course">{course.description}</p>
                                <p className="product-price-course">{course.price}</p>
                                <div className="card-flex-course">
                                    <ion-icon
                                        name={course.isFeatured ? 'star' : 'star-outline'}
                                        className={`favorite-icon ${course.isFeatured ? 'filled' : ''}`}
                                        onClick={() => toggleFeatured(course.id)}
                                    ></ion-icon>
                                    <button onClick={() => handleDeleteCourse(course.id)} className="btn-delete-course">
                                        Eliminar
                                    </button>
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
