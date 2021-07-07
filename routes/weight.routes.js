const router = require("express").Router();
let WeightModel = require('../models/Weight.model');

// will handle all GET requests to http:localhost:5005/api/measurement
router.get("/measurement", (req, res, next) => {
  WeightModel.find().sort({date: -1})
  .then((measure) => {
     res.status(200).json(measure)    
  }).catch((err) => {
    res.status(500).json({
      error: 'Something went wrong',
      message: err
    })
  });
});

// will handle all POST requests to http:localhost:5005/api/create
router.post('/create', (req, res) => {  
  const {date, weight} = req.body;

  WeightModel.create({date, weight})
        .then((weight) => {
             res.status(200).json(weight)
        })
        .catch((err) => {
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        })  
})

// will handle all GET requests to http:localhost:5005/api/measurement/:id
router.get('/measurement/:id', (req, res) => {
  WeightModel.findById(req.params.id)
   .then((response) => {
        res.status(200).json(response)
   })
   .catch((err) => {
        res.status(500).json({
             error: 'Something went wrong',
             message: err
        })
   }) 
})


// will handle all DELETE requests to http:localhost:5005/api/measurement/:id
router.delete('/measurement/:id', (req, res) => {
  WeightModel.findByIdAndDelete(req.params.id)
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        })  
})

// will handle all PATCH requests to http:localhost:5005/api/measurement/:id
router.patch('/measurement/:id', (req, res) => {
  let id = req.params.id
  const {date, weight} = req.body;
  WeightModel.findByIdAndUpdate(id, {$set: {date, weight}}, {new: true})
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             console.log(err)
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        }) 
})

module.exports = router;
