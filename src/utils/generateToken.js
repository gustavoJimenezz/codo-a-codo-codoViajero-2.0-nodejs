const jwt = require('jsonwebtoken')

const tokenSign = async (user) => {
    return jwt.sign(
        {
            id: user.id,
            googleId: user.googleId || null,
            name: user.name,
            email: user.email,
            role_id: user.role_id || "",
        }, 

        process.env.JWT_SECRET,
        {
            expiresIn: "2h", 
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => {
    return jwt.decode(token, null)
}



module.exports = { tokenSign, decodeSign, verifyToken }