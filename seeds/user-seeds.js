const { User } = require('../models');

const userData = {
  username: 'yeezy',
  email: 'yeezy@gmail.com',
  password: 'password',
};

const seedUsers = () => User.create(userData);

module.exports = seedUsers;
