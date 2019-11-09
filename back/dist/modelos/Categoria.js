"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.categoria_model = (sequelize) => {
    var categoria = sequelize.define('t_categoria', {
        cat_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cat_nom: {
            type: sequelize_1.DataTypes.STRING(95)
        },
    }, {
        tableName: 't_categoria',
        timestamps: false
    });
    return categoria;
};
