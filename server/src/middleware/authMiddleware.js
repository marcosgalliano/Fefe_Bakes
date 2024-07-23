const jwt = require('jsonwebtoken');
const { User } = require('../db');

const checkAuth = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findByPk(decoded.userId, {
                attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
            });

            if (!req.user) {
                return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
            }

            next();
        } catch (error) {
            return res.status(403).json({ success: false, message: 'Token no válido' });
        }
    } else {
        return res.status(403).json({ success: false, message: 'No se proporcionó un token' });
    }
};

module.exports = {checkAuth};
