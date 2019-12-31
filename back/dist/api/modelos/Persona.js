"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO PABELLON
const sequelize_1 = require("sequelize");
exports.persona_model = (sequelize) => {
    let persona = sequelize.define('t_persona', {
        per_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        per_nom: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        per_ape: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        per_dir: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        per_cel: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false
        },
        per_est: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 't_persona',
        timestamps: false
    });
    return persona;
};
//# sourceMappingURL=Persona.js.map