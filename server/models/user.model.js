const { model, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      index: { unique: true },
    },
    email: {
      type: String,
      index: { unique: true },
    },
    password: {
      type: String,
    },
    token: { type: String },
  },

  {
    timestamps: true,
  },
);

module.exports = model('User', userSchema);
