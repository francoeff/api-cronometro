import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'plokij123.,',
    {
        dialect : 'postgres',
        host : 'localhost'
    }
)