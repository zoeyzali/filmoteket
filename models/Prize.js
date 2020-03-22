const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema


// Create a schema for the award
let prizeSchema = new Schema( {
    "name": {
        type: String,
        required: true,
    },
    "festival": {
        type: Schema.Types.ObjectId,
        ref: 'Festival',
        required: true,
        autopopulate: { maxDepth: 1 }
    },
    "host": {
        type: String,
        required: true,
    },
    "winner": {
        type: Schema.Types.ObjectId,
        ref: 'Film',
        required: true,
        // autopopulate: { maxDepth: 3 }
    },
    "year": {
        type: Date,
        required: true,
    },
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    } )

// virtually reference films
prizeSchema.virtual( 'Awardee', {
    ref: 'Film',
    localField: '_id',
    foreignField: 'year',
    // autopopulate: { maxDepth: 1 }
} );

// prizeSchema.plugin( require( 'mongoose-autopopulate' ) )

module.exports = Prize = mongoose.model( 'Prize', prizeSchema )

