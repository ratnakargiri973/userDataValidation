import { logger } from "../index.js";

function validatePhoneNumber(req, res, next){
    const {Phone} = req.body;

    logger.log("info", "validating phone number ...");
    
    if (!/^\d{10,}$/.test(Phone)) {
        logger.log("error", "Phone number must be at least 10 digits long.")
        return res.status(400).json({ error: 'Phone number must be at least 10 digits long.' });
    }

    logger.log("info", "validating phone number successfully completed !!");
    next();
}

export default validatePhoneNumber;