'use strict';
const hash = require('../helper/bcrypt.js')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please input correct name Address'
        }
      }
    },
    username: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'You\'re supposed to have a username!'
        },
        len: {
          args: [3,10],
          msg: 'Please input min 3 characters and max 10 characters for username'
        },
        notContains: {
          args: 'admin',
          msg: 'Admin is out of question!'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'You\'re supposed to have a password!'
        },
        len: {
          args: [5,20],
          msg: 'Please input min 5 characters and max 20 characters for password'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
    instance.password = hash(instance.password)
  })
  return User;
};