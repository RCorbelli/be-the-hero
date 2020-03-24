/**
 * Metodos HTTP:
 * 
 * GET: Buscar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar informação no back-end
 */
 /**
  * Tipos de Parametros:
  * 
  * Query: Parametros nomeados na rota após ("?") (filtros e paginação)
  * Route: parametros utilizados para identificar recursos
  * Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */
  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where(...)
   */
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');
const routes = express.Router();


routes.post('/sessions', SessionsController.create );
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/profile', ProfileController.index);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;