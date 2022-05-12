const Todo = require('../../models/todo.model');
const User = require('../../models/user.model');

module.exports = {
  Query: {
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    getTodo: async (_, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
    // user: async (_, { id }) => {
    //   return users.find((user) => user.id === id);
    // },
  },
  Mutation: {
    addTodo: async (_, args, context) => {
      // const user = checkAuth(context);
      const newTodo = new Todo({
        title: args.title,
        detail: args.detail,
        date: args.date,
      });
      await newTodo.save();
      return newTodo;
    },
    deleteTodo: async (_, args, context) => {
      // const user = checkAuth(context);
      // if (user.username === post.username) {
      //   await Todo.findByIdAndDelete(args.id);
      //   return 'Todo deleted successfully';
      // }
    },
    updateTodo: async (_, args) => {
      const { id, title, detail, date } = args;
      const updateTodo = {};
      if (title != undefined) {
        updateTodo.title = title;
      }
      if (detail != undefined) {
        updateTodo.detail = detail;
      }
      if (date != undefined) {
        updateTodo.date = date;
      }
      const todo = await Todo.findByIdAndUpdate(id, updateTodo, { new: true });
      return todo;
    },
  },
};
