const models = require('../database/models/index')

exports.GetTouristDestinationByID = async (req, res) => {
    try {
        const { id } = req.params;
        const travelPackage = await models.TouristDestination.findByPk(id);
        if (travelPackage) {
            res.status(200).json(travelPackage);
        } else {
            res.status(404).json({ error: 'Travel package not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Error :', message: e.message });
    }
}

exports.AddNewTouristDestination = async (req, res) => {
    try {
        const { city, description, img } = req.body;
        const newTouristDestination = await models.TouristDestination.create({
            city,
            description,
            img,

        });
        res.status(200).json(newTouristDestination);
    } catch (e) {
        res.status(500).json({ error: 'Error post', message: e.message });
    }
}

exports.EditTouristDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const travelPackage = await models.TouristDestination.findByPk(id);
        if (travelPackage) {
            travelPackage.set(req.body);
            await travelPackage.save();
            res.status(202).json(travelPackage);
        } else {
            res.status(404).json({ error: 'Turist destination not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Error updating travel package', message: e.message });
    }
}

exports.DeleteTouristDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const travelPackage = await models.TouristDestination.findByPk(id);
        
        if (travelPackage) {
            await travelPackage.destroy(); 
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'not found' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Error deleting travel package', message: e.message });
    }
}
