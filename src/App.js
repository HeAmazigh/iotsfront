import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import {AuthContext} from './shared/context/auth-context';
import {useAuth} from './shared/hooks/auth-hook';
import './App.css';

import Login from './pages/authpages/Login';
import Signup from './pages/authpages/Signup';

const App = () => {
  const {userId, token, login, logout} = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path='/' exact> <Login/> </Route>
      </Switch>
    )
  }else{
    routes = (
      <Switch>
        <Route path='/' exact> <Login/> </Route>
        <Route path='/signup'> <Signup/> </Route>
        <Redirect to='/signup'/>
      </Switch>
    )
  }
  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}>
      <Router>
        <main>
          <Suspense fallback={
            <div className="center">
              <h1>Loading</h1>
            </div>
          }>
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
