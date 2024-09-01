function errorhandler(err,req, res, next){
   return  res.status(500).json({ error: 'Something went wrong! Please try again later.' });
}
export default errorhandler;