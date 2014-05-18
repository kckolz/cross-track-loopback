var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
  title: { type: String, default:'' },
  description: { type: String, default:'' },
  classification: { 
    type: String,
    required: true,
    default: 'weightlifting',
    enum: ['gymnastics', 'metcon', 'weightlifting']
  },
  measure: { 
    type: Number, 
    default: 0
  }

});

module.exports = mongoose.model('Exercise', exerciseSchema);