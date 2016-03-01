'use strict';

const Sequelize = require('sequelize');
//load database.
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

//making model to define a tabel and adding a migration for it.
const Frienemy = sequelize.define('frienemy', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const Project = sequelize.define('project', {
  name: Sequelize.STRING
});

//adding a new field to project. relation to frienemy.
Project.hasMany(Frienemy, {as: 'workers'});

let jane;

sequelize.sync().then(() => {
  jane = Frienemy.create({
    name: 'Jane Doe',
    birthday: new Date('1980-3-4')
  });
}).then(function(frienemy) {
  console.log('JANE>>', jane);
}).then(() => {
  return Project.create({
    name: 'Angular 101'
  });
}).then((project) => {
  //jane.addProject(project);
});
