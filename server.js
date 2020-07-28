const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
//conectando ao BD
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true } );
requireDir("./src/models");


//direcionamento das rotas para o arquivo 'routes'
app.use('/api', require('./src/routes'));

//porta do app
app.listen(3001);