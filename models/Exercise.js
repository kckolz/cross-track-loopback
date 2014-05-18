var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
  title: { type: String, default:'' },
  description: { type: String, default:'' },
  type: { 
        required: true,
        enum: ['gymnastics', 'metcon', 'weightlifting']
    }
});

module.exports = mongoose.model('Exercise', exerciseSchema);