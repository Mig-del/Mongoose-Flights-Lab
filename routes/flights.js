var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')


router.get('/', flightsCtrl.index);



router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show)



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
