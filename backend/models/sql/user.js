const db = require('../../sql_db');

function User(name, email, telephone, birthday){
  this.user_id = null;
  this.name = name;
  this.email = email;
  this.telephone = telephone;
  this.birthday = birthday;
  this.points_bonus = 0;
}


User.prototype.insert = function(done){
  var values =  [
    this.user_id,
    this.name,
    this.email,
    this.telephone,
    this.birthday,
    this.points_bonus];

  db.get().query('INSERT INTO user (user_id, name, email, telephone, birth, points_bonus) VALUES(?,?,?,?,?,?)',
    values, function(err, result) {
      if (err) return done(err);
    });
};

User.prototype.getAll = function(done) {
  db.get().query('SELECT * FROM user', function (err, rows) {
    if (err) return done(err);
    done(null, rows);
  });
};

User.prototype.getAllByUser = function(userId, done) {
  db.get().query('SELECT * FROM comments WHERE user_id = ?', userId, function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  });
};

module.exports = User;
