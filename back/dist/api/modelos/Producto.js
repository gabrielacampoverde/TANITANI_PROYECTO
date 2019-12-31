"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODELO PRODUCTO
const sequelize_1 = require("sequelize");
exports.producto_model = (sequelize) => {
    let producto = sequelize.define('t_producto', {
        pro_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        pro_nom: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true
        },
        pro_prec: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        pro_est: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        },
        pro_det: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        pro_img: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        },
        pro_desc: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        pro_stock: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 't_producto',
        timestamps: false
    });
    return producto;
};
//# sourceMappingURL=Producto.js.map