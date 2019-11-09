// MODELO ORDEN
import { DataTypes } from 'sequelize';

export let orden_model = (sequelize: any) => {

  let orden = sequelize.define('t_orden', {
    orde_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    orde_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    orde_estado: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    orde_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 't_orden',
    timestamps: true
  });

  return orden;

}
