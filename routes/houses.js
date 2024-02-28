const express = require('express');
const router = express.Router();
const HouseModel = require('./../models/house');

// Get all houses or filter by name
router.get('/v1-api/houses', async (req, res) => {
    try {
        const houses = await HouseModel.find(undefined, undefined, undefined);
        res.json(houses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific house
router.get('/v1-api/housesByName', async (req, res) => {
    try {
        const { name } = req.query;
        let houses;
        if (name) {
            houses = await HouseModel.find({ name: { $regex: name, $options: 'i' } });
        } else {
            // houses = await HouseModel.find();
        }
        res.json(houses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
