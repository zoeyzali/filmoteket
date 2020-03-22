const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

// Create a filmfestival schema
let festivalSchema = new Schema( {
    "name": {
        type: String,
        required: true
    },
    "image": {
        type: String
    },
    "location": {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    "host": {
        type: String,
        required: true,
    },
    "eventDate": {
        type: Date,
        required: true,
    },
    "isAnnual": {
        type: Boolean,
    },
    "prize": {
        type: String,
        required: true,
    },
    "winner": {
        type: Schema.Types.ObjectId,
        ref: 'Film',
        required: true,
        // autopopulate: { maxDepth: 3 }
    }
} )


// festivalSchema.plugin( require( 'mongoose-autopopulate' ) )

module.exports = Festival = mongoose.model( 'festival', festivalSchema )

