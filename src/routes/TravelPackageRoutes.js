const express = require('express');
const router = express.Router();
const travelPackagesController = require('../controller/TravelPackageController');

router.get('/', travelPackagesController.GetAllTravelPackages);
router.get('/:id', travelPackagesController.GetTravelPackageByID);
router.post('/', travelPackagesController.AddNewTravelPackage);
router.put('/:id', travelPackagesController.EditTravelPackage);
router.delete('/:id', travelPackagesController.DeleteTravelPackage);

module.exports = router;
