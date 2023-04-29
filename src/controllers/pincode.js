/** @format */

const Pincode = require("../models/pincode");

//get pincodes
exports.getPincodes = (req, res) => {
    Pincode.find({}).exec((error, Pincodes) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (Pincodes) {
        return res.status(200).json({ Pincodes });
      }
    });
  };

  //create pincodes

  exports.addPincocdes = (req,res) => {
    const {pincodes} = req.body;
    const data = pincodes.split(',');
    const codes = [];
    data.forEach(pc => {
        if(pc.length)
        codes.push({'pincode': pc});
    });
    Pincode.collection.insertMany(codes, function(err, docs){
        if(err)
        return res.status(500).json({ err });
        else 
        return res.status(200).json({ docs });
    })
  }
  //DELETE pincodes

  exports.deletePincode = async (req,res) => {
    const {pincode} = req.params;
    console.log(pincode);
    try{
      await Pincode.findOneAndDelete({pincode:pincode});
      return res.status(200).json({ message: 'Deleted Successfully' });
    }
    catch (error){
        return res.status(500).json({ message: error.message })
    }
  }

