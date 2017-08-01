'use strict';
module.exports = function(app) {
  var personList = require('../controllers/Controller');


  // PersonList Routes
  app.route('/person')
    .get(personList.list_all_person)
    .post(personList.create_a_person);


  app.route('/person/:personId')
    .get(personList.read_a_person)
    .put(personList.update_a_person)
    .delete(personList.delete_a_person);
};