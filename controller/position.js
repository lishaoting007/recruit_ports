const positionModel = require('../model/position');

//查询职位
async function getPosition(req, res, next) {
  try {
    const data = await positionModel
      .find()
      .sort({ _id: -1 })
      .limit(9);
    res.json({
      code: 200,
      success: true,
      msg: 'success',
      data
    });
  } catch (err) {
    next(err);
  }
}

// 获取热门职位
async function getHotPosition(req, res, next) {
  try {
    const data = await positionModel.find().limit(4);
    res.json({
      code: 0,
      success: true,
      msg: 'success',
      data
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getPosition
};
