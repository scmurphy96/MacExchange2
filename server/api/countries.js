const express = require('express');

const getCountries = require('../controllers/countries.js');

const router = express.Router();

// http://localhost:5001/countries
router.get('/', getCountries);

module.exports = router;
