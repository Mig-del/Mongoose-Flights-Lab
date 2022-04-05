
   
const Flight = require("../models/flight");
module.exports = {
    create
};

function create(req, res){
   
    Flight.findById(req.params.id, function(err, flightDatabase){
        flightDatabase.destinations.push(req.body); //pushes contents of form into destinations array
        flightDatabase.save(function(err){
            res.redirect(`/flights/${flightDatabase._id}`)
        })
    })
}
