const companyModel = require('../model/company');
const positionModel = require('../model/position');

// 添加一家公司
async function createCompany(req, res, next) {
  try {
    const { name, address, avatar, introduce, scale, type } = req.body;
    if (name) {
      const data = await companyModel.create({
        name,
        address,
        introduce,
        avatar,
        scale,
        type
      });
      res.json({
        code: 0,
        data
      });
    } else {
      res.json({
        code: 400,
        msg: '缺少必要参数'
      });
    }
  } catch (err) {
    next(err);
  }
}

// 获取全部公司
async function getAllCompany(req, res, next) {
  try {
    const data = await companyModel.find();
    res.json({
      code: 0,
      data
    });
  } catch (err) {
    next(err);
  }
}

// 获取9个公司
async function getNineCompany(req, res, next) {
  try {
    const data = await companyModel
      .find()
      .sort({ _id: -1 })
      .limit(9);
    res.json({
      code: 0,
      data
    });
  } catch (err) {
    next(err);
  }
}

// 根据公司id获取公司职位信息
async function getPositionByCompanyId(req, res, next) {
  try {
    const { companyId } = req.query;
    if (companyId) {
      const data = await positionModel.find({ companyId });
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
module.exports = {
  createCompany,
  getAllCompany,
  getNineCompany,
  getPositionByCompanyId
};
