const { Model, DataTypes } = require('sequelize');
const { static } = require('express');
const bcrypt = require('bcryptjs');


class TripPeople extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            id_trip: DataTypes.INTEGER,
            time: DataTypes.STRING,
            name_embark:DataTypes.STRING,





        }, {
            sequelize
        });


    }




}
module.exports = TripPeople;