const { verifyToken } = require('../helpers/generateToken');

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

module.exports = checkAuth;