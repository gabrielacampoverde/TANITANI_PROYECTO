"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.imagen_model = (sequelize) => {
    let imagen = sequelize.define('t_imagen', {
        imagen_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        imagen_url: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 't_imagen',
        timestamps: true
    });
    return imagen;
};
//# sourceMappingURL=Imagen.js.map