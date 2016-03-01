'use strict';

module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    EmployeeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    BirthDate: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Country: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING,
    Email: DataTypes.STRING,
    ReportsTo: DataTypes.STRING
  }, {
    tableName: 'Employee',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Employee.belongsTo(models.Employee, {
          foreignKey: 'ReportsTo'
        });
        // associations can be defined here
      }
    }
  });

  return Employee;
};
