const mongoose = require('mongoose');
const record = new mongoose.Schema(
  {
    applicantId: mongoose.SchemaTypes.ObjectId,
    positionId: mongoose.SchemaTypes.ObjectId,
    companyId: mongoose.SchemaTypes.ObjectId
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createTime',
      updatedAt: 'updateTime'
    }
  }
);

module.exports = mongoose.model('record', record);
