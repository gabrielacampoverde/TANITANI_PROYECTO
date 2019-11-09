import { DataTypes } from 'sequelize';

export let imagen_model = (sequelize: any) => {

  let imagen = sequelize.define('t_imagen', {
    imagen_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    imagen_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 't_imagen',
    timestamps: true
  });

  return imagen;

}