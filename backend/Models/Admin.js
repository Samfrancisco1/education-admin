const Sequelize = require('sequelize');
const db = require("../database/db");

module.exports = db.sequelize.define(
    'admins',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING,           
        }
        ,
        email:{
            type: Sequelize.STRING,
        }
        ,
        password:{
            type: Sequelize.STRING,           
        }
        ,
        phone:{
            type: Sequelize.STRING,
            
        }
        ,
        address:{
            type: Sequelize.STRING,
            
        }
        ,
        status:{
            type: Sequelize.STRING,           
        },
        date_reg:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW           
        },
        image:{
            type: Sequelize.STRING,           
        }
    },
    {
        timestamps: false
    }
);