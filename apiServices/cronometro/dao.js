import { Sequelize, DataTypes } from "sequelize";
const { sequelize }  = require('../../services/postgresDB');

const cronometro = sequelize.define('cronometro', {
    id : {
        type : DataTypes.SMALLINT,
        primaryKey : true
    },
    fecha : { type : DataTypes.DATE },
    tiempo : { type : DataTypes.TIME },
    accion : { type : DataTypes.CHAR }
}, { timestamps: false, freezeTableName: true })

module.exports = {
    async obtenerRegistros() {
        return await cronometro.findAll({order : [['fecha', 'DESC']]});
    },

    async obtenerRegistro(id) {
        return await cronometro.findAll({
            where : { id }
        })
    },

    async crearRegistro(fecha, tiempo, accion) {
        return await cronometro.create({ fecha, tiempo, accion }, { fields : ['fecha', 'tiempo', 'accion'] })
    },
 
    async actualizarRegistro(id, {fecha, tiempo, accion}){
        return await cronometro.update({ fecha, tiempo, accion }, { where : { id } })
    },

    async eliminarRegistro(id) {
        return await cronometro.destroy({ where : id })
    }

}