// MODELO PABELLON
import { DataTypes } from 'sequelize';

export let persona_model = (sequelize: any) => {

  let persona = sequelize.define('t_persona', {
    per_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    per_nom:{
      type: DataTypes.TEXT,
      allowNull: false
    
    },
    per_ape: {
      type: DataTypes.TEXT,
      allowNull: false
   
    },
    per_dir:{
      type: DataTypes.TEXT,
      allowNull: false

    },
    per_cel:{
      type: DataTypes.STRING(45),
      allowNull: false

    },
    per_est:{
      type: DataTypes.INTEGER,
      allowNull: false

    }
    
  }, {
    tableName: 't_persona',
    timestamps: false
  });

  return persona;

}