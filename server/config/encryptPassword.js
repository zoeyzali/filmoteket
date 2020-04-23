const crypto = require( 'crypto' )
const salt = "$URthe$altOfThe€arth$"

module.exports = password => {
    return crypto.createHmac( 'sha256', salt )
        .update( password ).digest( 'hex' )
}