const crypto = require('crypto');

function encryptPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
    return hash;
};

// Genera un salt aleatorio (debe almacenarse junto con la contraseña en la base de datos)
function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

module.exports = { encryptPassword, generateSalt };