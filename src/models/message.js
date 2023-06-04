import {sequelize} from "../database/sequelize.js";
import {DataTypes} from "sequelize";


export const Message = sequelize.define('message', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    to: {
        type: DataTypes.STRING,
        notNull: true
    },
    from: {
        type: DataTypes.STRING,
        notNull: true
    },
    subject: {
        type: DataTypes.STRING,
        notNull: true
    },
    text: {
        type: DataTypes.STRING,
        notNull: true
    }
})