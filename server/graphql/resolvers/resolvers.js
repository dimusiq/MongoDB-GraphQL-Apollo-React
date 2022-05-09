// const generateToken = require('../../token/jwt');
// const bcrypt = require('bcryptjs');
// const Todo = require('../../models/todo.model.js');
// const User = require('../../models/user.model.js');

// export const resolvers = {
//   Query: {
//     getTodos: async () => {
//       const todos = await Todo.find();
//       return todos;
//     },
//     getTodo: async (root, args) => {
//       const todo = await Todo.findById(args.id);
//       return todo;
//     },
//     user: async (root, { id }) => {
//       return users.find((user) => user.id === id);
//     },
//   },
//   Mutation: {
//     addTodo: async (root, args, context) => {
//       // const user = checkAuth(context);
//       const newTodo = new Todo({
//         title: args.title,
//         detail: args.detail,
//         date: args.date,
//       });
//       await newTodo.save();
//       return newTodo;
//     },
//     deleteTodo: async (root, args, context) => {
//       // const user = checkAuth(context);
//       if (user.username === post.username) {
//         await Todo.findByIdAndDelete(args.id);
//         return 'Todo deleted successfully';
//       }
//     },
//     updateTodo: async (root, args) => {
//       const { id, title, detail, date } = args;
//       const updateTodo = {};
//       if (title != undefined) {
//         updateTodo.title = title;
//       }
//       if (detail != undefined) {
//         updateTodo.detail = detail;
//       }
//       if (date != undefined) {
//         updateTodo.date = date;
//       }
//       const todo = await Todo.findByIdAndUpdate(id, updateTodo, { new: true });
//       return todo;
//     },
//     login: async (_, { username, password }) => {
//       const { errors, valid } = validateLoginInput(username, password);
//       if (!valid) {
//         throw new UserInputError('Errors', { errors });
//       }
//       const user = await User.findOne({ username });
//       if (!user) {
//         errors.general = 'User not found';
//         throw new UserInputError('User not found', { errors });
//       }
//       const match = await bcrypt.compare(password, user.password);
//       if (!match) {
//         errors.general = 'Wrong crendetials';
//         throw new UserInputError('Wrong crendetials', { errors });
//       }
//       const token = generateToken(user);
//       return {
//         ...user._doc,
//         id: user._id,
//         token,
//       };
//     },
//     register: async (
//       _,
//       { registerInput: { username, email, password, confirmPassword } },
//     ) => {
//       // Validate user data
//       const { valid, errors } = validateRegisterInput(
//         username,
//         email,
//         password,
//         confirmPassword,
//       );
//       if (!valid) {
//         throw new UserInputError('Errors', { errors });
//       }
//       // TODO: Make sure user doesn't already exist
//       const user = await User.findOne({ username });
//       if (user) {
//         throw new UserInputError('Username is taken', {
//           errors: {
//             username: 'This username is taken',
//           },
//         });
//       }
//       // hash password and create an auth token
//       password = await bcrypt.hash(password, 12);
//       const newUser = new User({
//         email,
//         username,
//         password,
//         createdAt: new Date().toISOString(),
//       });
//       const res = await newUser.save();
//       const token = generateToken(res);
//       return {
//         ...res._doc,
//         id: res._id,
//         token,
//       };
//     },
//   },
// };

// export default resolvers;
