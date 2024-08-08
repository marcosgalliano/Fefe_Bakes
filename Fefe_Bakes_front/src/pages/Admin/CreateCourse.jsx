import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCourse } from '../../redux/actions/courseActions';
import Header from '../../components/Header/Header'
import './CreateCourse.css'; // Asegúrate de que los estilos estén en este archivo

const CreateCourse = () => {
    const dispatch = useDispatch();

    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        price: '',
        level: '',
        images: [{ url: '', description: '' }],
        video_url: '',
        recipe_pdf_url: ''
    });

    const handleChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (index, field, value) => {
        const updatedImages = [...courseData.images];
        updatedImages[index][field] = value;
        setCourseData({ ...courseData, images: updatedImages });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCourse(courseData));
    };

    return (
        <> 
        <Header />
        <form onSubmit={handleSubmit} className="create-course-form">
        <h2> Crea un Curso</h2>
            <div className="form-group">
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={courseData.title}
                    onChange={handleChange}
                    className="input-title"
                    placeholder="Título del Curso"
                />
            </div>

            <div className="form-group">
                <textarea
                    id="description"
                    name="description"
                    value={courseData.description}
                    onChange={handleChange}
                    className="input-description"
                    placeholder="Descripción del Curso"
                />
            </div>

            <div className="form-group">
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={courseData.price}
                    onChange={handleChange}
                    className="input-price"
                    placeholder="Precio del Curso"
                />
            </div>

            <div className="form-group">
                <select
                    id="level"
                    name="level"
                    value={courseData.level}
                    onChange={handleChange}
                    className="input-level"
                >
                    <option value="" disabled>Selecciona el nivel</option>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
            </div>

            <div className="form-group">
                <input
                    type="url"
                    id="video_url"
                    name="video_url"
                    value={courseData.video_url}
                    onChange={handleChange}
                    className="input-video-url"
                    placeholder="URL del Video"
                />
            </div>

            <div className="form-group">
                <input
                    type="url"
                    id="recipe_pdf_url"
                    name="recipe_pdf_url"
                    value={courseData.recipe_pdf_url}
                    onChange={handleChange}
                    className="input-recipe-pdf-url"
                    placeholder="URL del PDF de la Receta"
                />
            </div>

            <div className="form-group">
                {courseData.images.map((image, index) => (
                    <div key={index} className="image-group">
                        <input
                            type="url"
                            name="url"
                            value={image.url}
                            onChange={(e) => handleImageChange(index, 'url', e.target.value)}
                            className="input-image-url"
                            placeholder="URL de la imagen"
                        />
                        <input
                            type=""
                            name="description"
                            value={image.description}
                            onChange={(e) => handleImageChange(index, 'description', e.target.value)}
                            className="input-image-description"
                            placeholder="Descripción de la imagen"
                        />
                    </div>
                ))}
            </div>

            <button type="submit" className="submit-button">Crear Curso</button>
        </form>
        </>
    );
};

export default CreateCourse;
