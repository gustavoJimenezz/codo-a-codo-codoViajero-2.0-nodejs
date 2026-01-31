const jwt = require('jsonwebtoken')

const tokenSign = async (user) => {
    console.log("User name :", user.name);
    return jwt.sign(
        {
            id: user.id,
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