const express = require('express');
const routes  = require('./routes');
const cors    = require('cors');
const {error404Handler, errorHandler} = require('./middleware');
 

const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//routes
app.use('/v1', routes);

app.use(error404Handler);
app.use(errorHandler);

module.exports = app;
