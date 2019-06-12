const { Router } = require('express');
const router = Router();
const {
  registerApplicant,
  loginApplicant,
  publishResume,
  getPersonResume,
  updateEmail,
  updatePassword,
  updatePhone
} = require('../controller/applicant');

router.post('/register', registerApplicant);
router.post('/login', loginApplicant);
router.post('/resume', publishResume); //发布简历
router.get('/', getPersonResume); // 获取个人信息
router.post('/password', updatePassword); // 修改密码
router.post('/phone', updatePhone); // 修改手机号
router.post('/email', updateEmail); // 修改邮箱

module.exports = router;
