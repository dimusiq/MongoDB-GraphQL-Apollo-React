import { gql } from 'apollo-server-express';

const typeDefs = gql`
scalar Date
type Todo{
    id: ID
    title: String
    detail: String
    date: Date
    username: String!

}

type Query{
    getTodos:[Todo]
    getTodo(id:ID):Todo
    user(id: ID!): User
}

type User {
    id: ID!
    username: String!
    email: String!
    token: String!
}

input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
}

type Mutation {
    addTodo(title:String, detail:String, date:Date):Todo
    deleteTodo(id:ID):String
    updateTodo(id:ID, title:String, detail:String, date:Date):Todo
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
} 
`

export default typeDefs