const applicantModel = require('../model/applicant');
const codeModel = require('../model/smsCode');
const mongoose = require('mongoose');
const signTokem = require('../utils/signToken');

// 注册一个应聘者
async function registerApplicant(req, res, next) {
  try {
    const { userName, password, phone, email, code } = req.body;
    if (userName && password && phone && email && code) {
      const code = await codeModel.findOne({ phone }).sort({ _id: -1 });
      if (code) {
        const hasUser = await applicantModel.findOne({ userName });
        if (!hasUser) {
          const data = await applicantModel.create({
            userName,
            password,
            email,
            phone
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

// 登录一个应聘者
async function loginApplicant(req, res, next) {
  try {
    const { userName, password } = req.body;
    if (userName && password) {
      const applicantMsg = await applicantModel.findOne({ userName, password });
      if (password === applicantMsg.password) {
        const token = signTokem({ userId: applicantMsg._id });
        res.json({
          code: 0,
          success: true,
          msg: 'success',
          data: applicantMsg,
          token
        });
      }
    }
  } catch (err) {
    next(err);
  }
}

// 发布一个简历
async function publishResume(req, res, next) {
  try {
    const {
      userId,
      avatar,
      nickName,
      name,
      sex,
      school,
      introduce,
      intentionJob,
      intentionCompany,
      education,
      address,
      graduateTime,
      awards,
      age
    } = req.body;
    const data = await applicantModel.update(
      { _id: userId },
      {
        $set: {
          avatar: avatar,
          nickName: nickName,
          name: name,
          sex: sex,
          school: school,
          introduce: introduce,
          intentionJob: intentionJob,
          intentionCompany: intentionCompany,
          education: education,
          address: address,
          graduateTime: graduateTime,
          awards: awards,
          age: age,
          experience: experience,
          skills: skills
        }
      }
    );
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

// 获取个人简历
async function getPersonResume(req, res, next) {
  try {
    const { applicantId } = req.query;
    if (applicantId) {
      const data = await applicantModel.findOne({
        applicantId: mongoose.Types.ObjectId(applicantId)
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

// 修改密码
async function updatePassword(req, res, next) {
  try {
    const { userId, password } = req.body;
    if (userId && password) {
      const data = await applicantModel.update(
        { _id: userId },
        { $set: { password } }
      );
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
async function updateEmail(req, res, next) {
  try {
    const { userId, email } = req.body;
    if (userId && email) {
      const data = await applicantModel.update(
        { _id: userId },
        { $set: { email } }
      );
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
async function updatePhone(req, res, next) {
  try {
    const { userId, phone } = req.body;
    if (userId && phone) {
      const data = await applicantModel.update(
        { _id: userId },
        { $set: { phone } }
      );
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
  registerApplicant,
  loginApplicant,
  publishResume,
  getPersonResume,
  updatePassword,
  updatePhone,
  updateEmail
};
