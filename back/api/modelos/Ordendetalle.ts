import { DataTypes, Sequelize, Model } from 'sequelize';
import { type } from 'os';

export let ordendetalle_model = (sequelize: Sequelize) => {
    class ordendetalle_model extends Model{
        static init: any;
};

        ordendetalle_model.init({
        odet_id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        odet_cant:{
            type:DataTypes.DECIMAL(10.2)
        },
        odet_prec:{
            type:DataTypes.DECIMAL(10,2)
        }
    },{
        sequelize,
        modelName:'t_ordendetalle',
        timestamps:false
    });
    return ordendetalle_model;
}