"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO ORDEN DETALLE
const sequelize_1 = require("sequelize");
exports.ordendetalle_model = (sequelize) => {
    let ordendetalle = sequelize.define('t_ordendetalle', {
        odet_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        odet_cant: {
            type: sequelize_1.DataTypes.DECIMAL(10.2),
            allowNull: true
        },
        odet_prec: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    }, {
        tableName: 't_ordendetalle',
        timestamps: false
    });
    return ordendetalle;
};
