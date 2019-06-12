const mongoose = require('mongoose');
const position = new mongoose.Schema(
  {
    hrId: mongoose.SchemaTypes.ObjectId,
    companyId: mongoose.SchemaTypes.ObjectId,
    content: {
      type: String,
      default: ''
    },
    skilList: {
      type: String,
      default: []
    },
    title: {
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

module.exports = mongoose.model('position', position);
