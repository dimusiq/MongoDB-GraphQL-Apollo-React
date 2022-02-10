import { gql } from 'apollo-server-express';

const typeDefs = gql`
scalar Date
type Todo{
    id: ID
    title: String
    detail: String
    date: Date
}

type Query{
    getTodos:[Todo]
    getTodo(id:ID):Todo
    user(id: ID!): User
    viewer: User! # NEW!
}

type User {
    id: ID!
    name: String
    
}

type Mutation {
    addTodo(title:String, detail:String, date:Date):Todo
    deleteTodo(id:ID):String
    updateTodo(id:ID, title:String, detail:String, date:Date):Todo
    login(email: String!, password: String!): String
} 
`

export default typeDefs