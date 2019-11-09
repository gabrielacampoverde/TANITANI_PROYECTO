import { Sequelize, Model } from 'sequelize';

export var producto_model = (sequelize: Sequelize, type: any) => {
    
    class producto_model extends Model{};
   
        producto_model.init({
        pro_id: {
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        pro_nom:{
            type:type.STRING(100)
        },
        pro_prec:{
            type:type.DECIMAL(10,2)
        },
        pro_est:{
            type:type.STRING(20)
        },
        pro_desc:{
            type:type.TEXT()
        },
    },{
        sequelize,
        modelName:'t_producto',
        timestamps:false
    });
    return producto_model;
}