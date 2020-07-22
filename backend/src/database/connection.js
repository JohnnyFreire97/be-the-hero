const knex =  require('knex');
const confiuguration  = require('../../knexfile') ;

const connection = knex(confiuguration.development);

module.exports = connection;