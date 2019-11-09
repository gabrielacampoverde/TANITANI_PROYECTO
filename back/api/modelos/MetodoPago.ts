// MODELO METODOPAGO UNICO
import { DataTypes } from 'sequelize';

export let metodopago_model = (sequelize: any) => {

  let metodopago = sequelize.define('t_metodopago', {
    mpago_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    mpago_nom: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
   
  }, {
    tableName: 't_metodopago',
    timestamps: true
  });

  return metodopago;

}
