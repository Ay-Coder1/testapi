const express = require('express')
const router = express.Router();
const { Other } = require("../model/Other")


// GET METHOD

router.get(`/`, async (req, res) => {
    const otherList = await  Other.find() 
     
    if(!otherList){
      res.status(500).json({success: false})
    }
    res.send(otherList);
  });

// POST METHOD
router.post(`/`, (req, res) => {
  const other = new other({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock
  })

  other.save().then((createdOther => {
    res.status(201).json(createdOther)
  })).catch(err => {
    res.status(500).json({
      error: err,
      success: false
    })
  })

});

module.exports = router;