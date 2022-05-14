import React from 'react';
import { Routes, Route} from 'react-router-dom';
import AddTodos from './components/new-todo.component'
import TodoList from './components/todo-list.component';
import Login from './pages/Login'
import Register from './pages/Register';

import Header from './components/header.component';

function App() {

  return (
    <>   
   <div className="container">
      <Header/>
            <Routes>
              <Route path='/' element={<AddTodos/>}/>
              <Route path='/' element={<TodoList/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
            </div>
</>

  );
}

export default App;
