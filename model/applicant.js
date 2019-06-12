const mongoose = require('mongoose');

const applicant = new mongoose.Schema(
  {
    userName: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    password: String,
    phone: String,
    sex: {
      type: String,
      default: ''
    },
    school: {
      type: String,
      default: ''
    },
    nickName: {
      type: String,
      defaule: ''
    },
    name: {
      type: String,
      default: ''
    },
    introduce: {
      type: String,
      default: ''
    },
    intentionJob: {
      type: String,
      default: ''
    },
    intentionCompany: {
      type: String,
      default: ''
    },
    education: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: null
    },
    address: {
      type: String,
      default: ''
    },
    graduateTime: {
      type: Number,
      default: ''
    },
    awards: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: ''
    },
    experience: {
      type: String,
      default: ''
    },
    skills: {
      type: String,
      default: ''
    }
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createTime',
      updatedAt: 'updateTime'
    }
  }
);

module.exports = mongoose.model('applicant', applicant);
