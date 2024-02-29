# House API

This Express.js application provides RESTful API endpoints for managing houses.

## Endpoints

### Get all houses or filter by name

- **Endpoint:** `/v1-api/houses`
- **Method:** GET
- **Description:** Retrieves all houses from the database. Optionally, it can filter houses by name.
- **Query Parameters:**
  - `name` (optional): Filters houses by name using case-insensitive regex matching.
- **Example Usage:**
  - Retrieve all houses:
    ```
    GET /v1-api/houses
    ```
  - Filter houses by name (e.g., "Stark"):
    ```
    GET /v1-api/houses?name=Stark
    ```

### Get a specific house

- **Endpoint:** `/v1-api/housesByName`
- **Method:** GET
- **Description:** Retrieves a specific house from the database by name.
- **Query Parameters:**
  - `name` (required): Name of the house to retrieve.
- **Example Usage:**
  - Retrieve the house named "Stark":
    ```
    GET /v1-api/housesByName?name=Stark
    ```

## Implementation

```javascript
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
