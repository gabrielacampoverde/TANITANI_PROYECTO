"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.comentario_model = (sequelize) => {
    let comentario = sequelize.define('t_comentario', {
        comen_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comen_desc: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        comen_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true
        },
        comen_rating: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        tableName: 't_comentario',
        timestamps: true
    });
    return comentario;
};
