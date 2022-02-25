const express = require('@awaitjs/express');
const controller = require('./controller');
const router = express.Router();

router.getAsync('/', controller.obtenerRegistros);
router.getAsync('/:id', controller.obtenerRegistro);
router.postAsync('/', controller.crearRegistro);
router.putAsync('/:id', controller.actualizarRegistro);
router.deleteAsync('/:id', controller.eliminarRegistro);

module.exports = router;