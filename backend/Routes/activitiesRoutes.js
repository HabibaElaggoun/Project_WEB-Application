const express = require('express');
const CheckNameActivitie = require('../middlewares/CheckNameActivitie');
const Activitie = require('../models/Activities');
const upload = require('../utils/multer');
const isAuth= require('../middlewares/isAuth');
const isAdmin= require ('../middlewares/isAdmin');
const router = express.Router();




//ADD 
router.post('/addactivitie',upload("activities").single("file"), isAuth() , CheckNameActivitie, async (req, res)=>{
    console.log(req.file)
    const url=`${req.protocol}://${req.get('host')}`;
    const {file}=req;
 
    try {
        const searchActivitie = await Activitie.findOne({name:req.body.name})
        if(searchActivitie)
        {return res.status(400).send({msg:'name must be unique'})}
        const newActivitie = new Activitie({...req.body,user:req.user._id});
        newActivitie.image=`${url}/${file.path}`;
        await newActivitie.save();
        res.send({newActivitie, msg:'Activity added succussfely'})
    } catch (error) {
        console.log(error);
        res.status(400).send("failed to save")
    }
});

//GET ALL
router.get("/", async (req, res)=>{
    
     try {
         const allActivities = await Activitie.find()
         res.send(allActivities)  
        } catch (error) {
            console.log(error)
            res.status(400).send("Failed to get")
        }
})


//DELETE
router.delete("/:id",async(req,res)=>{
    try {
      const Activitiedeleted = await Activitie.deleteOne({_id:req.params.id})  
      if(Activitiedeleted.deletedCount)
      {return res.send({msg:"Activitie deleted "})}
      res.status(400).send({msg:"Already deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send("Failed to delete") 
    }
})

//PUT
router.put('/:id', async (req,res) => {
try {
  const result = await Activitie.updateOne({_id:req.params.id},{$set:{...req.body}})
  const activitieUpdated = await Activitie.findOne({_id:req.params.id})
  if(result.modifiedCount)
  {return res.send({msg:'Activitie updated', activitieUpdated})}
res.status(400).send({msg:'Already updated'})
} catch (error) {
  console.log(error)
  res.status(400).send('Failed to update')
}
})
  
//DETAILS 
router.get('/details/:id', async(req,res)=>{
    try {
        const oneActivitie = await Activitie.findOne({_id:req.params.id})
        res.send({oneActivitie})
        } catch (error) {
        console.log(error)
        res.status(400).send('Failed to get the product')
    }
})
module.exports = router