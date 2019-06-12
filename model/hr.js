const mongoose = require('mongoose');
const hr = new mongoose.Schema(
  {
    userName: String,
    password: String,
    phone: String,
    companyId: {
      type: mongoose.SchemaTypes.ObjectId
    },
    email: {
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

module.exports = mongoose.model('hr', hr);
