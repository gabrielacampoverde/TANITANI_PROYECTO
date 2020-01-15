"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO AULA
const sequelize_1 = require("sequelize");
exports.compra_model = (sequelize) => {
    let compra = sequelize.define('t_compra', {
        comp_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comp_descuento: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        },
        comp_total_cup: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        },
        comp_dep: {
            type: sequelize_1.DataTypes.STRING(9),
            allowNull: true,
        },
        comp_prov: {
            type: sequelize_1.DataTypes.STRING(9),
            allowNull: true,
        },
        comp_dist: {
            type: sequelize_1.DataTypes.STRING(9),
            allowNull: true,
        },
        comp_direc_ref: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        comp_tel_ref: {
            type: sequelize_1.DataTypes.STRING(9),
            allowNull: true,
        }
    }, {
        tableName: 't_compra',
        timestamps: true
    });
    return compra;
};
//# sourceMappingURL=Compra.js.map