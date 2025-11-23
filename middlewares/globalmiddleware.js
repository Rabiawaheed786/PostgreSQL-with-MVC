 //middlewares/globalmiddleware.js
 exports.globalmiddleware =  (req, res, next)=>{
    console.log(`🕜 DATE: ${new Date().toISOString()} - METHOD: ${req.method} - PATH: ${req.path}`);
    next()

 }
