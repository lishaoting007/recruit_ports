const mongoose = require('mongoose');

const company = new mongoose.Schema(
  {
    name: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    introduce: {
      type: String,
      default: ''
    }, // 简介
    scale: {
      type: String,
      default: ''
    }, // 规模
    type: {
      type: String,
      default: ''
    } // 类型
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createTime',
      updatedAt: 'updateTime'
    }
  }
);

module.exports = mongoose.model('company', company);
