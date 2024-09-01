import { logger } from "../index.js";

function validatePassword(req, res, next){
    const {Password} = req.body;

    logger.log("info", "validating password ...");

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if(!passwordRegex.test(Password)){
        logger.log("error", "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.");
        return res.status(400).json({ 
            error: 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.' 
        });
    }

    logger.log("info", "validating password successfully completed !!");

    next();
}

export default validatePassword;