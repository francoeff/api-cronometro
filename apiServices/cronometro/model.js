const cronometroDao = require('./dao');

module.exports = {
    async obtenerRegistros() {
        return cronometroDao.obtenerRegistros();
    },

    async obtenerRegistro(id) {
        return cronometroDao.obtenerRegistro(id);
    },

    async crearRegistro(registro) {
        return cronometroDao.crearRegistro(registro.fecha, registro.tiempo, registro.accion);
    },

    async actualizarRegistro(id, registro) {
        return cronometroDao.actualizarRegistro(id, registro);
    },

    async eliminarRegistro(id) {
        return cronometroDao.eliminarRegistro(id);
    }
}