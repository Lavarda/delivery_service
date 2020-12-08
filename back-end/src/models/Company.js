const { Model, DataTypes } = require('sequelize')

class Company extends Model {
    static init(connection) {
        super.init({
            start: DataTypes.INTEGER,
            number_avaliations: DataTypes.INTEGER,
            description: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.hasMany(models.Category, {
            foreignKey: 'id_company',
            as: 'company_category',
        })

        this.hasMany(models.Products, {
            foreignKey: 'id_company',
            as: 'company_products',
        })
    }
}

module.exports = Company;