import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';

const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Main} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
    );
}
}

export default useRoutes;