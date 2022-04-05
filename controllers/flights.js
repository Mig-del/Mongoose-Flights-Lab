
const Flight = require("../models/flight");
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
          flights,
          title: 'All Flights'});
    })
}

function newFlight(req, res) {
  const newFlight = new Flight()
  const dp = newFlight.departs;
  const departsDate = dp.toISOString().slice(0.16)
    res.render("flights/new", { departsDate });
  }
  







  function create(req, res){
    console.log(req.body)
    const flight = new Flight(req.body)
    flight.save(function(err){
        if (err) return res.render('flights/new');
        console.log(flight)
        res.redirect('/flights');
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) { // allows us to access specific flight by id
      
      Ticket.find({flight: flight._id}, function(err, tickets){
        
          res.render('flights/show', {title: 'Flight Details', flight, tickets });
        })
      })
    }