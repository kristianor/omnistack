const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-8bznx.mongodb.net:27017,omnistack-shard-00-01-8bznx.mongodb.net:27017,omnistack-shard-00-02-8bznx.mongodb.net:27017/semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar corpo da requisição (para criação de registros)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);