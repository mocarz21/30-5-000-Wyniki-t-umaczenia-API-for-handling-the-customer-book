const Seat =require('../models/seat.model');

exports.getAll = async (req,res ) => {
    try{
        res.json( await Seat.find())
    }
    catch(err){
        res.status(500).json({message: err})

    }
}
exports.getOne = async(req,res) => {
    try{
        const dep = res.json(await Seat.findById(req.params.id))
        if(!dep) res.status(404).json({message: 'not found ....'})
    }
    catch(err){
        res.status(500).json({messare: err});

    }
}
exports.post = async (req, res) => {
    try{
        const {day, seat, client, email} = req.body
        const newSeat = new Seat({day: day, seat: seat, client: client , email: email})
        await newSeat.save()
        res.json({message: 'ok'})
    }
    catch(err){
        res.status(500).json({message: err})
    }
  }
  exports.putOne = async (req,res)=>{
    try{
        const {day, seat, client, email} = req.body
        const dep = await Seat.findById(req.params.id);
        if(dep){
            await dep.updaeteOne({_id: id.params.id}, {$set: {day: day, seat: seat, client: client , email: email}})
            res.json({message: 'ok'})
        }else{
            res.status(404).json({messege: 'not found ...'})  
        }
    }
    catch(err) { 
        res.status(500).json({message: err})
    }
}
exports.deleteOne = async (req,res) => {
    try{
        const dep = await Seat.findById(req.params.id)
        if(dep){
            await dep.deleteOne({_id: req.params.id})
            res.json({message: 'ok'})
        }else{
            res.status(404).json({messege: 'not found ...'})  
        }
    }
    catch(err) { 
        res.status(500).json({message: err})
    }
}
