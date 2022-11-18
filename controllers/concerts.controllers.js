
const Concert = require('../models/concert.model')

exports.getAll = async (req,res ) => {
    try{
        res.json( await Concert.find())
    }
    catch(err) {
        res.status(500).json({message: err})
    }
};

exports.getOne = async (req,res)=>{
    try{
        const dep =res.json(await Concert.findById(req.params.id))
        if(!dep) res.status(404).json({message: 'Not Found'})
    }
    catch(err) {
        res.status(500).json({message: err})
    }
}
exports.post = async (req, res) => {
    try{
        const count = await Concert.countDocuments();
        const { performer, genre, price, day, image } = req.body;
        const newConcert = new Concert({performer: performer, genre: genre, price: price, day: day, image: image});
        await newConcert.save();
        res.json(await Concert.findOne().skip(count));
    
      }catch(err) {
        res.status(500).json({message: err})
      }
  };
  exports.putOne = async (req,res)=>{
    const { performer, genre, price, day, image } = req.body;
    
    try{
      const dep = await Concert.findById(req.params.id);
      if(dep){
        await Concert.updateOne({_id: req.params.id}, {$set: {performer: performer, genre: genre, price: price, day: day, image: image}});
        res.json({message: 'ok'});
      }
      else res.status(404).json({message: 'not found...'})
    }
    catch(err) {
      res.status(500).json({message: 'err'});
    }
}
exports.deleteOne = async (req,res) => {
    try{
        const dep = await Concert.findById(req.params.id);
        if(dep) {
          await Concert.deleteOne({_id: req.params.id});
          res.json(await Concert.find())
        }
        else res.status(404).json({message: 'Not found...'});
      }
      catch(err){
        res.status(500).json({message: err})
      }

}