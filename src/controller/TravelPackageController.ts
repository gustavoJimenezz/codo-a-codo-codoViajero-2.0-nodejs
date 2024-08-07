import TravelPackage from "../models/TravelPackage"
import { Request, Response } from 'express';

export const GetAllTravelPackages = async (req:Request, res:Response): Promise<void> =>{
    try {
        const travelPackage = await TravelPackage.findAll();
        res.status(200).json(travelPackage);
    } catch (e) {
        res.status(500).json({ error: 'Error fetching' });
    }
}

export const GetTravelPackageByID = async (req:Request, res:Response): Promise<void> =>{
    try {
        const { id } = req.params;
        const travelPackage = await TravelPackage.findByPk(id);
        res.status(200).json(travelPackage);
    } catch (e) {
        res.status(500).json({ error: 'Error fetching' });
    }
}

export const AddNewTravelPackage = async (req:Request, res:Response): Promise<void> =>{
    try {
        const { city, description, hotel, price, img, active } = req.body;
        console.log("este es el LOG")
        console.log(req.body)
        const newTravelPackage = await TravelPackage.create({
            city,
            description,
            hotel,
            price,
            img,
            active
        })
        res.status(200).json(newTravelPackage);
    } catch (e:any) {
        res.status(500).json({ error: 'Error post', details: e.message });
    }
}

export const EditTravelPackage = async (req:Request, res:Response): Promise<void> =>{
    try {
        const { id } = req.params;
        const travelPackage = await TravelPackage.findByPk(id);
        if(travelPackage){
            travelPackage.set(req.body);
            await travelPackage.save();
            res.status(202).json(travelPackage);
        } else {
            res.status(404).json({ error: 'Travel package not found' });
        }
    } catch (e:any) {
        res.status(500).json({ error: 'Error updating travel package', details: e.message });
    }
}

export const DeleteTravelPackage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const travelPackage = await TravelPackage.findByPk(id);
        
        if (travelPackage) {
            await travelPackage.destroy(); 
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Travel package not found' });
        }
    } catch (e:any) {
        res.status(500).json({ error: 'Error deleting travel package', details: e.message });
    }
};