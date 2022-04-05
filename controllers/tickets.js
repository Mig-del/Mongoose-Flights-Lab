const Flight = require('../models/flight');

const Ticket = require('../models/ticket') 

module.exports = {
  create,
  deleteTicket
}


function create(req, res) {
  Flight.findById(req.params.id, function(err, flightDatabase){
  req.body.flight = flightDatabase._id 
  console.log(flightDatabase)
	Ticket.create(req.body, function(err, ticket) {
		res.redirect(`/flights/tickets${flight._id}`)
	});
  })
}

function deleteTicket(req,res){
    Ticket.findByIdAndDelete(req.params.ticketId, function(err,ticket){
        Flight.findById(req.params.id, function(err,flight){
            res.redirect(`/flights/${flight.id}`)
        })
    })
}

