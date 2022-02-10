import Todo from '../models/Todo.js';
import jwt from "jsonwebtoken";
import { users } from '../data/data.js';


const resolvers = {
    Query: {
        getTodos: async () => {
            const todos = await Todo.find()
            return todos
        },
        getTodo: async ( root, args ) => {
            const todo = await Todo.findById(args.id);
            return todo
        },
        user(root, { id }) {
            return users.find(user => user.id === id);
        },
        viewer(root, args, { user }) {
            return users.find(({ id }) => id === user.sub);
        },
    },
    Mutation:{
        addTodo: async ( root, args ) => {
        const newTodo = new Todo ({title:args.title, detail:args.detail, date:args.date})
        await newTodo.save();
        return newTodo
        },
        deleteTodo: async ( root, args ) => {
            await Todo.findByIdAndDelete(args.id);
            return "Todo deleted sucessfuly"
        },
        updateTodo:
        async ( root, args ) => {
            const {id, title, detail, date} = args;
            const updateTodo = {};
            if(title!=undefined){
                updateTodo.title = title
            }
            if(detail!=undefined){
                updateTodo.detail = detail
            }
            if(date!=undefined){
                updateTodo.date = date
            }
            const todo = await Todo.findByIdAndUpdate(id, updateTodo, { new: true })
            return todo;
        },
        login(root, { email, password }) {
            const { id, permissions, roles } = users.find(
                user => user.email === email && user.password === password
            );
            return jwt.sign(
            { "https://spaceapi.com/graphql": { roles, permissions } },
            "SUPER_SECRET",
            { algorithm: "HS256", subject: id, expiresIn: "1d" }
            );
        }
    }
}

export default resolvers