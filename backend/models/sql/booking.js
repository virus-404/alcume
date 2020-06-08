const db = require('../../sql_db');

function Booking(patient_id, treatment_id, treatment_scheduled){
  this.booking_id = null;
  this.patient_id = patient_id;
  this.treatment_id = treatment_id;
  this.treatment_scheduled = treatment_scheduled;
  this.paid = false;
  this.confirmed = false;
}

Booking.prototype.insert = function(done){
  var values =  [
    this.patient_id,
    this.treatment_id,
    this.treatment_scheduled,
    true,
    true];

  db.get().query('INSERT INTO booking (patient_id, treatment_id, treatment_scheduled, paid, confirmed) VALUES(?,?,?,?,?)',
    values, function(err, result) {
      if (err) return done(err);
    });
};

Booking.prototype.getAll = function(done) {
  db.get().query('SELECT * FROM booking', function (err, rows) {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports = Booking;
