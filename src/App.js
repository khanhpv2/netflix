import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./components/constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

export const history = createBrowserHistory();

function App() {
  // const user = {name: 'karl'};
  const {user} = useAuthListener();
  console.log(user)
  // const user = null
  // const user = {};
  // console.log(user)
  return (
    <Router history={history}>
      <Switch> 
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
         
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
         
        > 
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect> 
       
       </Switch>

      {/* <Switch>
        <Route exact path="/browse">
          <Browse />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <SignUp />
        </Route>
      </Switch> */}


    </Router>
  );
}

export default App;
