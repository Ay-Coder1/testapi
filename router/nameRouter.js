const express = require('express')
const router = express.Router();
const { Name } = require("../model/Name")


// GET METHOD

router.get(`/`, async (req, res) => {
    const nameList = await  Name.find() 
     
    if(!nameList){
      res.status(500).json({success: false})
    }
    res.send(nameList);
  });

// POST METHOD
router.post(`/`, (req, res) => {
  const name = new Name({
    name: req.body.name,
    image: req.body.image,

  })

  name.save().then((createdName => {
    res.status(201).json(createdName)
  })).catch(err => {
    res.status(500).json({
      error: err,
      success: false
    })
  })

});

module.exports = router;