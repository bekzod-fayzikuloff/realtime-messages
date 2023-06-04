import {Message} from "../models/message.js";

export const getMessagesBy = async (fields) => {
    return await Message.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {...fields},
        order: [
            ["createdAt", "DESC"]
        ]
    })
}