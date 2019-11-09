// MODELO PABELLON
import { DataTypes } from 'sequelize';

export let persona_model = (sequelize: any) => {

  let t_persona = sequelize.define('persona', {
    per_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    per_nombre:{
      type: DataTypes.TEXT,
      allowNull: false
    
    },
    per_apellido: {
      type: DataTypes.TEXT,
      allowNull: true
   
    },
    per_direccion:{
      type: DataTypes.TEXT,
      allowNull: false

    },
    per_celular:{
      type: DataTypes.STRING(45),
      allowNull: false

    },
    per_estado:{
      type: DataTypes.INTEGER,
      allowNull: false

    }
    
  }, {
    tableName: 'persona',
    timestamps: false
  });

  return t_persona;

}