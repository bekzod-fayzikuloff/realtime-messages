import express from "express"
import helmet from "helmet";
import * as db from "./database/sequelize.js";
import {config} from "./config.js";
import bodyParser from "body-parser"
import cors from "cors";
import * as http from "http";
import {Server} from "socket.io";
import {messageRouter} from "./routes/messages.js";

const app = express()
const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: config.CORS_ORIGIN
    }
})

app.use(helmet())

app.use(
    cors({
        origin: config.CORS_ORIGIN
    })
)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use("/messages", messageRouter)


io.on('connection', (socket) =>{
    console.log(`User is connected: ${socket.id}`)
})

db.sequelize.sync({ force: false }).then(() => {
    server.listen(config.PORT, () => {
        console.log("Server is running ...")
    })
});