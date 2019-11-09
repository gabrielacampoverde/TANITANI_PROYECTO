import { DataTypes, Sequelize } from 'sequelize';


export let categoriaproducto_model = (sequelize: Sequelize) => {

    var categoriaproducto = sequelize.define('t_categoriaproducto', {
        catprod_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
    },{
        tableName:'t_categoriaproducto',
        timestamps: false
    });
    return categoriaproducto;
}