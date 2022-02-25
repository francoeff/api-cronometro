const cronometroModel = require('./model');
const cronometroDto = require('./dto');

module.exports = {
    async obtenerRegistros(req, res) {
        try {
            const registros = await cronometroModel.obtenerRegistros();
            return res.send(cronometroDto.multiple(registros, req.user));
        } catch (e) {
            console.log(e)
        }
    },

    async obtenerRegistro(req, res) {
        const {id} = req.params;
        try{
            const registro = await cronometroModel.obtenerRegistro(parseInt(id));
            return res.send(cronometroDto.single(registro, req.user));
        }catch (e) {
            if (e.code === "NOT_FOUND") res.status(404);
            else res.status(500);
            res.send(e);
        }
    },

    async crearRegistro(req, res) {
        if (!req.body.fecha){
            res.status(400);
            return res.send({code: "PARAM_NOT_FOUND", mensaje : "Falta la fecha"})
        }
        if (!req.body.tiempo){
            res.status(400);
            return res.send({code: "PARAM_NOT_FOUND", mensaje : "Falta el tiempo"})
        }
        if (!req.body.accion){
            res.status(400);
            return res.send({code: "PARAM_NOT_FOUND", mensaje : "Falta la accion"})
        }

        try {
            const registro = await cronometroModel.crearRegistro(req.body);
            res.status(201);
            return res.send(cronometroDto.single(registro, req.user))
        } catch (e) {
            res.status(500);
            return res.send({codigo : e.code, mensaje : e.sqlMessage});
        }
    },

    async actualizarRegistro(req, res){
        if (!req.body.fecha){
            res.status(400);
            return res.send({code: "PARAM_NOT_FOUND", mensaje : "Falta la fecha"})
        }
        if (!req.body.tiempo){
            res.status(400);
            return res.send({code: "PARAM_NOT_FOUND", mensaje : "Falta el tiempo"})
        }
        if (!req.body.accion){
            res.status(400);
            return res.send({code: "PARAM_NOT_FOUND", mensaje : "Falta la accion"})
        }

        const {id} = req.params;
        try{
            await cronometroModel.actualizarRegistro(id, req.body);
            return res.sendStatus(204);
        }catch (e) {
            if (e.code === "NOT_FOUND") res.status(404);
            else res.status(500);
            return res.send(e);
        }
    },

    async eliminarRegistro(req, res) {
        const {id} = req.params;
        try {
           await cronometroModel.eliminarRegistro(id);
           return res.sendStatus(204);
        } catch (e) {
            if (e.code === "NOT_FOUND") res.status(404);
            else res.status(500);
            return res.send(e);
        }
    }
}
