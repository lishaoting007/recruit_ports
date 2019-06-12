const hrModel = require('../model/hr');
const positionModel = require('../model/position');
const codeModel = require('../model/smsCode');
const signTokem = require('../utils/signToken');

// 注册hr
async function registerHr(req, res, next) {
  try {
    const { userName, password, phone, email, companyId, code } = req.body;
    if (userName && password && phone && email && companyId && code) {
      const code = await codeModel.findOne({ phone }).sort({ _id: -1 });
      if (code) {
        const hasUser = await hrModel.findOne({ userName });
        if (!hasUser) {
          const data = await hrModel.create({
            userName,
            password,
            email,
            phone,
            companyId
          });
          res.json({
            code: 0,
            msg: 'success',
            success: true,
            data
          });
        } else {
          res.json({
            code: 400,
            msg: '该用户已注册'
          });
        }
      } else {
        res.json({
          code: 400,
          msg: '验证码不正确'
        });
      }
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

// 登录hr
async function loginHr(req, res, next) {
  try {
    const { userName, password } = req.body;
    if (userName && password) {
      const hrMsg = await hrModel.findOne({ userName, password });
      if (password === hrMsg.password) {
        const token = signTokem({ userId: user._id });
        res.json({
          code: 0,
          success: true,
          msg: 'success',
          data: hrMsg,
          token
        });
      }
    }
  } catch (err) {
    next(err);
  }
}

// 发布一个职位
async function publishJob(req, res, next) {
  try {
    const { content, hrId, companyId, skilList, title } = req.body;
    if (content && hrId && companyId && skilList && title) {
      const data = await positionModel.create({
        content,
        hrId,
        companyId,
        skilList,
        title
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
module.exports = {
  registerHr,
  loginHr,
  publishJob
};
