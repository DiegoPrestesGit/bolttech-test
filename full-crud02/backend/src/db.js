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
    },
    isFinished: {
        type: BOOLEAN,
        defaultValue: false,
    },
    startDate: {
        type: STRING,
        allowNull: false,
    }, 
    endDate: {
        type: STRING,
        allowNull: true,
    }
},
    {
        createdAt: true, updatedAt: true
    }
)

export const Task = sequelizeConn.define('task', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: STRING,
    },
    notes: {
        type: STRING,
    },
    startDate: {
        type: STRING,
    },
    endDate: {
        type: STRING,
    },
},
    { createdAt: true, updatedAt: true }
)

Project.hasMany(Task, {
    foreignKey: 'projectID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})
Task.belongsTo(Project)

export const connectDB = async () => {
    try {
        await sequelizeConn.sync()
        console.log('DATABASE SUCCESSFULLY CONNECTED')
    } catch (error) {
        console.log('ERROR CONNECTING DATABASE')
        console.log(error)
    }
}
