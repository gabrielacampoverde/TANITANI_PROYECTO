// MODELO AULA
import { DataTypes, Sequelize } from 'sequelize';

export let compra_model = (sequelize: Sequelize) => {

  let compra = sequelize.define('t_compra', {
    comp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    comp_descuento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    comp_total_cup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    comp_direc_ref: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    comp_tel_ref: {
      type: DataTypes.STRING(9),
      allowNull: true,
    }
  }, {
    tableName: 't_compra',
    timestamps: true
  });

  return compra;

}
