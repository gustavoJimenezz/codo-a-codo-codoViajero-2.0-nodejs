const bcrypt = require('bcryptjs')
const globalConst = require('../constants/globalConst');

const encrypt = async (textPlain) => { 
    const hash = await bcrypt.hash(textPlain, parseInt(globalConst.ENC_PASSWORD))
    return hash
}

const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }