const express = require('express');
const cronometro = require("../apiServices/cronometro/routes");

const router  = express.Router();

router.use('/cronometro', cronometro);

module.exports = router;