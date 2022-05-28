import { gql } from '@apollo/client';


const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    registerUser(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
const LOGIN_USER = gql`
	mutation login($loginInput: LoginInput) {
		loginUser(loginInput: $loginInput) {
			username
      email
			
		}
	}
`;

const ADD_TODO = gql`
  mutation addTodo($title: String, $detail: String, $date: Date,) {
    addTodo(title: $title, detail: $detail, date: $date) {
      id
      username
      title
      detail
      date
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID) {
    deleteTodo(id: $id)
  }
`;

export {
  REGISTER_USER,
  LOGIN_USER,
  ADD_TODO,
  DELETE_TODO,
  
}
