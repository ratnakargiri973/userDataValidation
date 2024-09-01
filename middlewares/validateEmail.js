
import { logger } from "../index.js";
function validateEmail(req, res, next){
    const {Email} =req.body;

    logger.log("info", "validating email ...");

    if (!/@/.test(Email)) {
        logger.log("error", "Invalid email address. Must contain '@' symbol.");
        return res.status(400).json({ error: 'Invalid email address. Must contain "@" symbol.' });
    }
    
    logger.log("info", "validating email successfully completed !!");

    next();
}

export default validateEmail;