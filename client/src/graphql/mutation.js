import { gql } from '@apollo/client';

export const ADD_TODO = gql`
    mutation addTodo($title:String, $detail:String, $data:Date){
        addTodo(title:$title, detail:$detail, date:$data){
            id
            title
            detail
            date
    }
}
`

export const DELETE_TODO = gql`
        mutation deleteTodo($id:ID){
            deleteTodo(id:$id)
}
`