import { logger } from "../index.js";

function validateLastName(req, res, next) {
    const {lastName} = req.body;

    logger.log("info", "validating last name ...");
    
    if(!lastName){
        logger.log("error", "lastName is required");
        return res.status(400).json({error: 'lastName is required'});
    }

    const nameRegex = /^[A-Z]/;
    if(!nameRegex.test(lastName)){
        logger.log("error", "lastName must be start with capital letter");
        return res.status(400).json({error: 'lastName must be start with capital letter'});
    }
   
    if(lastName.length < 2){
        logger.log("error", "lastName must be at least 2 characters long");
        return res.status(400).json({error: 'lastName must be at least 2 characters long' });
    }

    logger.log("info", "validating Last name successfully completed !!");
   
    next();
}

export default validateLastName;