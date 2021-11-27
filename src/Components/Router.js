import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Auth from "Routes/Auth";
import Profile from "Routes/Profile";
import Collection from "Routes/Collection";
import { authService } from "fBase";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <Router isLoggedIn={isLoggedIn}>
      {isLoggedIn ? (
        <>
          <Header />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Route path="/profile" component={Profile} />
            <Route path="/collection/:id" component={Collection} />
            <Redirect from="*" to="/home" />
          </Switch>
        </>
      ) : (
        <>
          <Route exact path="/">
            <Auth />
          </Route>
          <Redirect from="*" to="/" />
        </>
      )}
    </Router>
  );
};
