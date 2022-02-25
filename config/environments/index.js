require('dotenv').config();

const DEVELOPMENT = require('./development');
const QA          = require('./qa');
const PRODUCTION  = require('./production');

const {NODE_ENV}  = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV === 'production') currentEnv = PRODUCTION;
if (NODE_ENV === 'qa') currentEnv = QA;

module.exports = currentEnv;