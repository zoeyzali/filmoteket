const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a schema for the award
let awardSchema = new Schema({
  "festival": { type: Schema.Types.ObjectId, ref: 'Film', required: true, autopopulate: { maxDepth: 1 } },
  "film": { type: Schema.Types.ObjectId, ref: 'Award', required: true, autopopulate: { maxDepth: 3 } },
  "date": { type: String, required: true },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

// virtually reference films
awardSchema.virtual('Film', {
  ref: 'film',
  localField: '_id',
  foreignField: 'year',
  autopopulate: { maxDepth: 1 }
});

awardSchema.plugin(require('mongoose-autopopulate'));

module.exports = db.model('Award', awardSchema);

