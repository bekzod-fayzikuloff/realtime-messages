import {validationResult} from "express-validator";
import {StatusCodes} from "http-status-codes";
import {io} from "../index.js";
import {Message} from "../models/message.js";
import {getMessagesBy} from "../services/messages.js";

export const catchValidationResult = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: errors.array(),
        });
    }
    next()
}


export const messageController = {
    getByName: async (req, res) => {
        const {name} = req.params
        res.json(await getMessagesBy({to: name}))
    },

    create: async (req, res) => {
        const {to, from, subject, text} = req.body
        const message = Message.build({
            to, from, subject, text
        })
        await message.save()
        io.emit(`message__${to}`, message.dataValues)
        res.status(StatusCodes.CREATED).json(message)
    }
}