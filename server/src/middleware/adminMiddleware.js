const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ success: false, message: 'Acceso denegado. Solo para administradores.' });
    }
    next();
};

module.exports = {checkAdmin};
