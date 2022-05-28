const { model, Schema } = require('mongoose');

const todoSchema = new Schema({
  content: String,
  username: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Todo', todoSchema);
