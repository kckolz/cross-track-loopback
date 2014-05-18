var mongoose = require('mongoose');

var wodSchema = new mongoose.Schema({
  title: { type: String, default:'' },
  description: { type: String, default:'' },
  exercises: {
    type: [Schema.Types.ObjectId],
    ref: 'Exercise'
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wod', wodSchema);