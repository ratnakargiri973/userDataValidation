import { logger } from "../index.js";
function validateFirstName(req, res, next) {
    const {firstName} = req.body;
    logger.log("info", "validating first name ...");
    if(!firstName){
        logger.log("error", "firstName is required")
        return res.status(400).json({error: 'firstName is required'});
    }

    const nameRegex = /^[A-Z]/;
    if(!nameRegex.test(firstName)){
        logger.log("error", "firstName must be start with capital letter")
        return res.status(400).json({error: 'firstName must be start with capital letter'});
    }
   
    if(firstName.length < 2){
        logger.log("error", "First name must be at least 2 characters long")
        return res.status(400).json({error: 'First name must be at least 2 characters long' });
    }
   
    logger.log("info", "validating first name successfully completed !!");

    next();
}

export default validateFirstName
