const { Router } = require('express');
const router = Router();
const { sendApplicantCode, sendHrCode } = require('../controller/sendCode');

router.post('/hr', sendHrCode);
router.post('/applicant', sendApplicantCode);

module.exports = router;
