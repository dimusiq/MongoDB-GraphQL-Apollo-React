const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    detail: String
    date: Date
    username: String
  }

  type Query {
    getTodos: [Todo]
    getTodo(id: ID): Todo
    user(id: ID!): User
  }

  type User {
    username: String
    email: String
    password: String
    token: String
  }

  input RegisterInput {
    username: String
    email: String
    password: String
    confirmPassword: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Mutation {
    addTodo(title: String, detail: String, date: Date): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, title: String, detail: String, date: Date): Todo
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
  }
`;