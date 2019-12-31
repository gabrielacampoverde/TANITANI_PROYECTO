"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO AULA
const sequelize_1 = require("sequelize");
exports.destino_model = (sequelize) => {
    let destino = sequelize.define('t_destino', {
        des_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        des_lat: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        },
        des_long: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        },
    }, {
        tableName: 't_destino',
        timestamps: true
    });
    return destino;
};
//# sourceMappingURL=Destino.js.map