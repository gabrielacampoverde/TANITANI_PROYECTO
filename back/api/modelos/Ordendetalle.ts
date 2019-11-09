// MODELO ORDEN DETALLE
import { DataTypes } from 'sequelize';

export let ordendetalle_model = (sequelize: any) => {

  let ordendetalle = sequelize.define('t_ordendetalle', {
    odet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    odet_cant: {
      type: DataTypes.DECIMAL(10.2),
      allowNull: true
    },
    odet_prec: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      }

  }, {
    tableName: 't_ordendetalle',
    timestamps: false
  });

  return ordendetalle;

}
