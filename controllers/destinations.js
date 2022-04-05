
   
const Flight = require("../models/flight");
module.exports = {
    create
};

function create(req, res){
    console.log(req.body)
    Flight.findById(req.params.id, function(err, flightDatabase){
        flightDatabase.destinations.push(req.body); //pushes contents of form into destinations array
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}
