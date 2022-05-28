const { gql } = require('apollo-server');

module.exports = gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    detail: String
    date: String
    username: String
  }

  type Query {
    getTodos: [Todo]!
    getTodo(todoId: ID): Todo
    user(id: ID!): User
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Mutation {
    addTodo(content: String!): Todo!
    deleteTodo(todoId: ID): String!
    updateTodo(id: ID ): Todo
    registerUser(registerInput: RegisterInput): User!
    loginUser(loginInput: LoginInput): User!
  }
`;
