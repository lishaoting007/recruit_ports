const { Router } = require('express');
const router = Router();
const { registerHr, loginHr, publishJob } = require('../controller/hr');

router.post('/register', registerHr);
router.post('/login', loginHr);
router.post('/position', publishJob);

module.exports = router;
