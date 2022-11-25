const Testimonial = require('../models/testimonial.models');


exports.getAll = async (req,res ) => {
    try{
        res.json( await Testimonial.find())
    }
    catch(err){
        res.status(500).json({message: err})

    }

}
exports.getRandom = async (req,res)=>{
    try{
        const count = await Testimonial.countDocuments();
        const rand = Math.floor(Math.random() * count)
        const dep = await Testimonial.findOne().skip(rand);
        if(!dep) res.status(404).json({message: 'Not Found'})
      }
      catch(err){
        res.status(500).json({message: err});
      }
}
exports.getOne = async (req,res)=>{
    try{
       const dep  = await Testimonial.findById(req.params.id)
       if(dep) res.json(dep)
       else res.status(404).json({message: 'not found ....'})
    }
    catch(err){
        res.status(500).json({messare: err});

    }
}
exports.post = async (req, res) => {
    try{
        const count = await Testimonial.countDocuments();
        const { author, text } = req.body;
        const newTestimonial = new Testimonial({author: author, text: text});
        await newTestimonial.save();
        res.json(await Testimonial.findOne().skip(count));
    
      }catch(err) {
        res.status(500).json({message: err})
      }
}
exports.putOne = async (req,res)=>{
    const { author, text } = req.body;
    
    try{
      const dep = await Testimonial.findById(req.params.id);
      if(dep){
        await Testimonial.updateOne({_id: req.params.id}, {$set: {author:author, text: text}});
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
        const dep = await Testimonial.findById(req.params.id);
        if(dep) {
          await Testimonial.deleteOne({_id: req.params.id});
          res.json(await Testimonial.find())
        }
        else res.status(404).json({message: 'Not found...'});
      }
      catch(err){
        res.status(500).json({message: err})
      }
}
