const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let filmSchema = new Schema({
  "title": { type: String, required: true },
  "productionCountries": [{ type: String }],
  "productionYear": Number,
  "length": Number,
  "genre": { type: String, required: true },
  "language": String,
  "subtitles": String,
  "director": { type: String, required: true },
  "actors": [{ type: String, require: true }],
  "description": String,
  "image": { type: String },
  "youtubeTrailers": { type: String },
}, { toJSON: { virtuals: true } });

filmSchema.virtual('awards', {
  ref: 'Award',
  localField: '_id',
  foreignField: 'year',
  autopopulate: { maxDepth: 2 }
});

filmSchema.plugin(require('mongoose-autopopulate'));

module.exports = db.model("Film", filmSchema);