const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

let listSchema = new Schema( {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    films: [
        {
            id: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Film'
            },
            type: Object,
            ref: 'Film'
            // required: true
        }
    ],
    user: {
        id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            // required: true,
        }
    },

} )

module.exports = List = mongoose.model( 'List', listSchema )