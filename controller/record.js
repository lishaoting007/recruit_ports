const mongoose = require('mongoose');
const positionModel = require('../model/position');
const applicantModel = require('../model/applicant');
const companyModel = require('../model/company');
const recordModel = require('../model/record');

// 投递记录
async function createRecord(req, res, next) {
  try {
    const { userId, companyId, positionId } = req.body;
    if ((userId, companyId, positionId)) {
      const data = await recordModel.create({
        applicantId: userId,
        positionId,
        companyId
      });
      res.json({
        code: 0,
        success: true,
        msg: 'success',
        data
      });
    }
  } catch (err) {
    next(err);
  }
}

// async function getRecord(req, res, next) {
//   try {
//     const { userId } = req.body;
//     if (userId) {
//       const record = await recordModel.find({ applicantId: userId });
//     }
//   } catch (err) {
//     next(err);
//   }
// }

module.exports = { createRecord };
