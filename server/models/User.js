const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

let UserSchema = new Schema( {
    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "lists": [{
        type: Schema.Types.ObjectId,
        ref: 'Film'
    }],
    "date": {
        type: Date,
        default: Date.now
    },
} )

// , { toJSON: { virtuals: true } }



UserSchema.methods.toJSON = function () {
    let obj = this.toObject()
    delete obj.password;
    return obj;
}
module.exports = User = mongoose.model( 'User', UserSchema )
