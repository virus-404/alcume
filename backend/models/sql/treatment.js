const db = require('../../sql_db');

function Treatment(name, description, treatment_time, price, points_bonus){
  this.treatment_id = null;
  this.name = name;
  this.description = description;
  this.treatment_time = treatment_time;
  this.price = price;
  this.points_bonus = points_bonus;
}
Treatment.prototype.insert = function(){
  var values =  [
    this.name,
    this.description,
    this.treatment_time,
    this.price,
    this.points_bonus];

  db.get().query('INSERT INTO treatment (name, description, treatment_time, price, points_bonus) VALUES(?,?,?,?,?,?)',
    values, function(err, result) {
      if (err) return err;
    });
};

Treatment.prototype.getAll = function() {
   db.get().query('SELECT * FROM treatment', function (err, rows) {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports = Treatment;

/* Users_> Loging_> buy */
