import {Router} from "express";

import {MessageValidator} from "../validators/message.validator.js";
import {catchValidationResult, messageController} from "../controllers/messages.js";

const router = Router()

router.post("/", MessageValidator, [catchValidationResult, messageController.create])
router.get("/:name", [messageController.getByName])


export {router as messageRouter}
