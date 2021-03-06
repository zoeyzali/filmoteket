const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

let filmSchema = new Schema( {
    "title": {
        type: String,
        required: true
    },
    "productionCountries": [{
        type: String,
        required: true,
    }],
    "productionYear": {
        type: Number,
        required: true,
    },
    "director": {
        type: String,
        required: true
    },
    "actors": [{
        type: String
    }],
    "overview": {
        type: String,
        maxlength: 200
    },
    "synopsis": {
        type: String
    },
    "genre": [{
        type: String,
        required: true
    }],
    "languages": [{
        type: String
    }],
    "subtitles": {
        type: String
    },
    "length": {
        type: Number
    },
    "images": {
        type: String
    },
    "video": {
        type: String
    },
    "winner": {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Festival'
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    "lists": [{
        type: Schema.Types.ObjectId,
        ref: 'List'
    }]
} )

// filmSchema.virtual( 'prize', {
//     ref: 'Prize',
//     localField: '_id',
//     foreignField: 'host',
//     autopopulate: { maxDepth: 2 }
// } )
//{ toJSON: { virtuals: true } }
// filmSchema.plugin( require( 'mongoose-autopopulate' ) )

module.exports = Film = mongoose.model( "Film", filmSchema )