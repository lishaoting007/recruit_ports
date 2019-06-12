const { Router } = require('express');
const router = Router();
const {
  createCompany,
  getAllCompany,
  getNineCompany,
  getPositionByCompanyId
} = require('../controller/campany');

router.post('/create', createCompany);
router.get('/all', getAllCompany);
router.get('/nine', getNineCompany);
router.get('/position', getPositionByCompanyId);

module.exports = router;
