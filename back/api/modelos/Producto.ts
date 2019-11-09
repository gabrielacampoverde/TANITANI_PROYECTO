import { DataTypes, Sequelize, Model } from 'sequelize';

export var producto_model = (sequelize: Sequelize) => {
    
    class producto_model extends Model{};
   
        producto_model.init({
        pro_id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        pro_nom:{
            type:DataTypes.STRING(100)
        },
        pro_prec:{
            type:DataTypes.DECIMAL(10,2)
        },
        pro_est:{
            type:DataTypes.STRING(20)
        },
        pro_desc:{
            type:DataTypes.TEXT()
        },
    },{
        sequelize,
        modelName:'t_producto',
        timestamps:false
    });
    return producto_model;
}