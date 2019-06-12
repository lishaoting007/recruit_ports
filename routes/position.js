const { Router } = require('express');
const router = Router();
const { getPosition } = require('../controller/position');

router.get('/', getPosition);

module.exports = router;
