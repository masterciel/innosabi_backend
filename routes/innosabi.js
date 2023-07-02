const express = require('express');
const router = express.Router();

const { fetchSuggestions } = require('../controllers/innosabi');
const { denyOtherMethods } = require('../middleware');

router.use(denyOtherMethods).get('', fetchSuggestions);

module.exports = router;
