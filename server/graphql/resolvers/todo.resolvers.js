const {
	AuthenticationError,
} = require('apollo-server-errors');
const Todo = require('../../models/todo.model');
const checkAuth = require('../../token/auth');

module.exports = {
	Query: {
		async getTodos() {
			try {
				const todos = await Todo.find().sort({
					createdAt: -1,
				});
				return posts;
			} catch (err) {
				throw new Error(err);
			}
		},
		async getTodo(_, { todoId }) {
			try {
				const todo = await todo.findById(todoId);
				if (todo) {
					return todo;
				} else {
					throw new Error('Todo not found');
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		user: async (_, { id }) => {
			return users.find((user) => user.id === id);
		},
	},
	Mutation: {
		async addTodo(_, { content }, context) {
			const user = checkAuth(context);

			if (content.trim() === '') {
				throw new Error('Todo body must not be empty');
			}

			const newTodo = new Todo({
				content,
				user: user.id,
				username: user.username,
				createdAt: new Date().toISOString(),
			});

			const todo = await newTodo.save();
			return todo;
		},
		async deleteTodo(_, { TodoId }, context) {
			const user = checkAuth(context);

			try {
				const Todo = await Todo.findByIde(TodoId);
				if (user.username === Todo.username) {
					await Todo.delete();
					return 'Todo deleted successfully';
				} else {
					throw new AuthenticationError(
						'Action not allowed'
					);
				}
			} catch (err) {
				throw new Error(err);
			}
		},
		async updateTodo(_, args) {
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
			const todo = await Todo.findByIdAndUpdate(
				id,
				updateTodo,
				{ new: true }
			);
			return todo;
		},
	},
};
