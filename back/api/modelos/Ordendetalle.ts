import { Sequelize, Model } from 'sequelize';

export var ordendetalle_model = (sequelize: Sequelize, type: any) => {
    class ordendetalle_model extends Model{};

        ordendetalle_model.init({
        odet_id: {
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        odet_cant:{
            type:type.DECIMAL(10.2)
        },
        odet_prec:{
            type:type.DECIMAL(10,2)
        }
    },{
        sequelize,
        modelName:'t_ordendetalle',
        timestamps:false
    });
    return ordendetalle_model;
}