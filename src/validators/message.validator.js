import {body} from "express-validator";

export const MessageValidator = [
    body("to")
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Your message should send from someone"),
    body("from")
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Your message should send from someone"),
    body("text")
        .notEmpty()
        .isLength({min: 1})
        .withMessage("Your message is required and must contain at least 1 characters")
]