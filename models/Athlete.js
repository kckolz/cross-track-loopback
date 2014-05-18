var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var athleteSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, default:'' },
  password: String,

  facebook: { type: String, unique: true, sparse: true },
  twitter: { type: String, unique: true, sparse: true },
  google: { type: String, unique: true, sparse: true },
  github: { type: String, unique: true, sparse: true },
  tokens: [ { kind: String, accessToken: String, tokenSecret: String } ],

  profile: {
    name: { type: String, default: '' },
    location: { type: String, default: '' },
    picture: { type: String, default: '' },
    description: { type: String, default: '' }
  }
});

/**
 * Hash the password for security.
 */

athleteSchema.pre('save', function(next) {
  var user = this;
  var SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

athleteSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('Athlete', athleteSchema);