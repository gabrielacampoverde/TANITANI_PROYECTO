import { DataTypes, Sequelize } from 'sequelize';


export let categoria_model = (sequelize: Sequelize) => {
    var categoria = sequelize.define('t_categoria', {
        cat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cat_nom: {
            type: DataTypes.STRING(95)
        },
        
    },{
        tableName:'t_categoria',
        timestamps: false
    });
    return categoria;
}