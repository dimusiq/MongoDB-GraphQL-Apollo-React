const { model, Schema } = require('mongoose');

const todoSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    detail: String,
    date: Date,
  },
  { timestamp: true },
);

module.exports = model('todo', todoSchema);
