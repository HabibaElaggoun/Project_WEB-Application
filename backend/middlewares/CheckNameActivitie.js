const CheckNameActivitie = (req, res, next)=>{
    if(!req.body.name){ return res.status(400).send("Name Activitie is required")}
    next()

} 

module.exports= CheckNameActivitie