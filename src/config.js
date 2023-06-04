import {configDotenv} from "dotenv";

configDotenv()


export const config = {
    DB_LINK: process.env.DB_LINK,
    PORT: +process.env.PORT,
    CORS_ORIGIN: process.env.CORS_ORIGIN
}