const knex = require('knex');

const config = require('../knexfile');

module.export = knex(config.development);