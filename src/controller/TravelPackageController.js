const models = require('../database/models/index')


exports.GetAllTravelPackages = async (req, res) => {
    try {
        const travelPackages = await models.TravelPackage.findAll();
        res.status(200).json(travelPackages);
    } catch (e) {
        res.status(500).json({ error: 'Error fetching' });
    }
}

exports.GetTravelPackageByID = async (req, res) => {
    try {
        const { id } = req.params;
        const travelPackage = await models.TravelPackage.findByPk(id);
        if (travelPackage) {
            res.status(200).json(travelPackage);
        } else {
            res.status(404).json({ error: 'Travel package not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Error fetching' });
    }
}

exports.AddNewTravelPackage = async (req, res) => {
    try {
        const { city, description, hotel, price, img, active } = req.body;
        console.log("este es el LOG");
        console.log(req.body);
        const newTravelPackage = await models.TravelPackage.create({
            city,
            description,
            hotel,
            price,
            img,
            active
        });
        res.status(200).json(newTravelPackage);
    } catch (e) {
        res.status(500).json({ error: 'Error post', details: e.message });
    }
}

exports.EditTravelPackage = async (req, res) => {
    try {
        const { id } = req.params;
        const travelPackage = await models.TravelPackage.findByPk(id);
        if (travelPackage) {
            travelPackage.set(req.body);
            await travelPackage.save();
            res.status(202).json(travelPackage);
        } else {
            res.status(404).json({ error: 'Travel package not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Error updating travel package', details: e.message });
    }
}

exports.DeleteTravelPackage = async (req, res) => {
    try {
        const { id } = req.params;
        const travelPackage = await models.TravelPackage.findByPk(id);
        
        if (travelPackage) {
            await travelPackage.destroy(); 
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Travel package not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Error deleting travel package', details: e.message });
    }
}
