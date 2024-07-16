import { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "Nombre Completo",
        email: "user@gmail.com",
        phone: "+51 12345678",
        address: "Calle 123, Buenos Aires, Argentina.",
        profileImage: "https://res.cloudinary.com/dasch1s5i/image/upload/v1721069445/premium_photo-1683121366070-5ceb7e007a97_xgp17a.avif"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUserInfo({ ...userInfo, profileImage: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="user-profile">
            <div className="header-profile">
                <h1>Datos personales</h1>
                <button className="edit-button" onClick={handleEditClick}>
                    {isEditing ? "Guardar" : "Modificar"}
                </button>
            </div>
            <div className="profile-card">
                <div className='profile-card-flex'> 
                    <img src={userInfo.profileImage} alt="User" className="profile-image" />
                    {isEditing && (
                        <>
                            <ion-icon name="cloud-upload-outline" class="upload-icon" onClick={() => document.getElementById('fileInput').click()}></ion-icon>
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                className="file-input"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </>
                    )}
                </div>
                <div className="profile-info">
                    {isEditing ? (
                        <>
                            <input 
                                type="text" 
                                name="name" 
                                value={userInfo.name} 
                                onChange={handleInputChange} 
                                className="edit-input"
                            />
                            <input 
                                type="email" 
                                name="email" 
                                value={userInfo.email} 
                                onChange={handleInputChange} 
                                className="edit-input"
                            />
                            <input 
                                type="text" 
                                name="phone" 
                                value={userInfo.phone} 
                                onChange={handleInputChange} 
                                className="edit-input"
                            />
                            <input 
                                type="text" 
                                name="address" 
                                value={userInfo.address} 
                                onChange={handleInputChange} 
                                className="edit-input"
                            />
                        </>
                    ) : (
                        <>
                            <h2>{userInfo.name}</h2>
                            <p>{userInfo.email}</p>
                            <hr className='hr-profile' />
                            <p>{userInfo.phone}</p>
                            <hr className='hr-profile' />
                            <p>{userInfo.address}</p>
                        </>
                    )}
                </div>
            </div>
            <div className="menu">
                <div className="menu-item">
                    <span>Pedidos</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
                <div className="menu-item">
                    <span>Información de pago</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
                <div className="menu-item">
                    <span>Preguntas Frecuentes</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
                <div className="menu-item">
                    <span>Ayuda</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
            </div>
            <button className="update-button">Actualizar</button>
        </div>
    );
};

export default UserProfile;
