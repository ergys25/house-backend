const mongoose = require('mongoose');

const housesSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    houseColours: { type: String, required: true },
    founder: { type: String, required: true },
    animal: { type: String, required: true },
    element: { type: String, required: true },
    ghost: { type: String, required: true },
    commonRoom: { type: String, required: true },
    heads: [{
        id: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    }],
    traits: [{
        id: { type: String, required: true },
        name: { type: String, required: true }
    }]
});

module.exports = mongoose.model('houses', housesSchema);
