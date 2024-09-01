import express from 'express';
import winston from 'winston';
// import dotenv from 'dotenv';
import validateFirstName from './middlewares/validateFirstName.js';
import validateLastName from './middlewares/validateLastname.js';
import validateEmail from './middlewares/validateEmail.js';
import validatePassword from './middlewares/validatePassword.js';
import validatePhoneNumber from './middlewares/validatePhoneNumber.js';
import errorHandler from './middlewares/errorHandler.js';

// dotenv.config();

const app = express();
// const PORT = process.env.PORT || 3030;
const PORT = 3030;
const hostname = "127.0.0.1";

app.use(express.json());

 export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
             (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/app.log" }),
    ],
});

app.use((req, res, next) => {
    logger.info(`Received a ${req.method} request for ${req.url}`);
    next();
});

let users = [];

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/register', 
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePassword,
    validatePhoneNumber,
    (req, res) => {

        const { firstName, lastName, Email, Password, Phone } = req.body;
        const newUser = { firstName, lastName, Email, Password, Phone };
         
        users.push(newUser);

        logger.log("info", "Register user is invoked");
        res.status(200).json({
            message: "User is registered successfully !!!",
            user: newUser
        });
        logger.log("info", "user is registered successfully !!!");
    }
);

app.use(errorHandler);

app.listen(PORT, hostname, () => {
    console.log("Server started on port " + PORT);
});
