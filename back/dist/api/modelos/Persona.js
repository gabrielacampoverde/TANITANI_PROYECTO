"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO PABELLON
const sequelize_1 = require("sequelize");
exports.persona_model = (sequelize) => {
    let t_persona = sequelize.define('t_persona', {
        per_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        per_nombre: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        per_apellido: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        per_direccion: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        per_celular: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        per_estado: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'persona',
        timestamps: false
    });
    return t_persona;
};
