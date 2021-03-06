// MODELO PRODUCTO
import { DataTypes } from 'sequelize';

export let producto_model = (sequelize: any) => {

  let producto = sequelize.define('t_producto', {
    pro_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    pro_nom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pro_prec: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      pro_est: {
        type: DataTypes.INTEGER,
        allowNull: true
      }, 
      pro_det: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      pro_img: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      pro_desc:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      pro_stock:{
        type: DataTypes.INTEGER,
        allowNull: true
      }

  }, {
    tableName: 't_producto',
    timestamps: false
  });

  return producto;

}
