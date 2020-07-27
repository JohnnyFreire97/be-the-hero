const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { use } = require('./routes');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
//express converter json em objeto JS
app.use(express.json());
app.use(routes);
app.use(errors());


/**
 * Rotas e Recursos
 */


/**
 * Métodos HTTP
 * 
 * GET: Buscar informações Backend
 * POST: Criar uma informação no Backend
 * PUT: Alterar uma informação no Backend
 * DELETE: Deletar um informação no Backend
 */
 
/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros' Paginação) =&&
 * Route Params? ParÂmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostegreSQL, Microsoft SQL Server
  * NoSQL: MongoDB...
  */


  /**
   * Driver: SELECT * FROM users
   * Query Builder:  table('users').select('*').where()
   */


module.exports = app;