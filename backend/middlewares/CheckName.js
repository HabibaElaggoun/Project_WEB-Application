const CheckName = (req, res, next)=>{
    if(!req.body.firstName){ return res.status(400).send("firstName is required")}
    next()

}

module.exports= CheckName