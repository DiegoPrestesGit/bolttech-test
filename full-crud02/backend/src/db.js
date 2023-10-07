import {Sequelize, UUID, UUIDV4, STRING, BOOLEAN } from "sequelize";

export const sequelizeConn = new Sequelize({
    dialect: 'postgres',
    username: 'admin',
    password: 'admin',
    database: 'challenge',
    host: 'localhost',
    port: '5432',
    ssl: false,
    pool: 300,
})

export const User = sequelizeConn.define('user', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: STRING,
        allowNull: false,
        
    }
},
    {
        createdAt: true, updatedAt: true
    }
)

export const Project = sequelizeConn.define('project', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userEmail: {
        type: STRING,
        allowNull: false,
        unique: true,
    },
    isFinished: {
        type: BOOLEAN,
        defaultValue: false,
        name: STRING,
        startDate: STRING,
        finishDate: STRING,
    }
},
    {
        createdAt: true, updatedAt: true
    }
)

export const connectDB = async () => {
    try {
        await sequelizeConn.sync()
        console.log('DATABASE SUCCESSFULLY CONNECTED')
    } catch (error) {
        console.log('ERROR CONNECTING DATABASE')
        console.log(error)
    }
}
