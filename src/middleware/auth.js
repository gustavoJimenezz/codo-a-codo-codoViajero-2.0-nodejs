const { verifyToken } = require('../utils/generateToken');

const injectUserContext = async (req, res, next) => {
    const token = req.cookies?.token;

    res.locals.user = null;
    req.user = null;

    if (!token) {return next();}

    try {
        const decoded = await verifyToken(token);
        console.log("Decoded JWT:", decoded);
        if (decoded) {
            res.locals.user = decoded;
            req.user = decoded;
        }
    } catch (error) {
        res.clearCookie('token');
        console.error("JWT Verification Error:", error.message);
    }
    next();
};

const checkAuth = async (req, res, next) => {
    try {
        // Obtener el token de las cookies
        const token = req.cookies.token;

        if (!token) {
            res.status(401).send({ error: 'No token provided!' });
            return;
        }

        // Verificar el token
        const tokenData = await verifyToken(token);

        if (tokenData && tokenData._id) {
            next();
        } else {
            res.status(401).send({ error: 'Invalid token!' });
        }
    } catch (e) {
        console.error(e);
        res.status(401).send({ error: 'Unauthorized!' });
    }
};

module.exports = { checkAuth, injectUserContext };