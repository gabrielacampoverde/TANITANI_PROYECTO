// MODELO AULA
import { DataTypes, Sequelize } from 'sequelize';

export let destino_model = (sequelize: Sequelize) => {

  let destino = sequelize.define('t_destino', {
    des_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    des_lat: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    des_long: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
  }, {
    tableName: 't_destino',
    timestamps: true
  });

  return destino;

}
