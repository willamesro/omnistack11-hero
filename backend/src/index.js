const express = require('express')
const routes = require('./routes')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

//Rota / para acessar recursos

/*
metodos HTTP
GET: Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/
/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após ?(filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */
/**
 * acesso ao bando de dados sql
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * Query Builder: Knex.js
 */

app.listen(3000)