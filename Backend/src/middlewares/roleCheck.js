// Función genérica para verificar roles
const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
        return res.status(403).json({ message: `Access denied: ${role.charAt(0).toUpperCase() + role.slice(1)}s only` });
    }
    next();
    };
};

// Middleware para verificar si el usuario es administrador
const isAdmin = checkRole('admin');

// Middleware para verificar si el usuario es cuidador
const isCaregiver = checkRole('caregiver');

// Middleware para verificar si el usuario es dueño de mascota
const isPetOwner = checkRole('pet_owner');

module.exports = { isAdmin, isCaregiver, isPetOwner };