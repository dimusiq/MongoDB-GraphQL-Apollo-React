import { gql } from '@apollo/client';


const REGISTER_USER = gql`
  mutation register($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      email
      username
      token
    }
  }
`
const LOGIN_USER = gql`
	mutation login($loginInput: LoginInput) {
		loginUser(loginInput: $loginInput) {
			email
			username
			token
		}
	}
`;

const ADD_TODO = gql`
  mutation addTodo($title: String, $detail: String, $date: Date) {
    addTodo(title: $title, detail: $detail, date: $date) {
      id
      title
      detail
      date
      username
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
