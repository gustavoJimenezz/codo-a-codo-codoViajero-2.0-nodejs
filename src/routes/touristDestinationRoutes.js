const express = require('express');
const router = express.Router();
const touristDestinationController = require('../controller/TouristDestinationController');

router.get('/:id', touristDestinationController.GetTouristDestinationByID);
router.post('/', touristDestinationController.AddNewTouristDestination);
router.put('/:id', touristDestinationController.EditTouristDestination);
router.delete('/:id', touristDestinationController.DeleteTouristDestination);

module.exports = router;
