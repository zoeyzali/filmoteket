const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a schema for an a show
let festivalSchema = new Schema({
    "Festival": {
        type: Schema.Types.ObjectId, ref: 'Festival', required: true, autopopulate: { maxDepth: 1 }
    },
    "Film": { type: Schema.Types.ObjectId, ref: 'Film', required: true, autopopulate: { maxDepth: 3 } },
    "Date": { type: String, required: true },
    "Award": { type: String, required: true }
})

festivalSchema.plugin(require('mongoose-autopopulate'));

module.exports = db.model('Festival', festivalSchema);