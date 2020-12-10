import React from "react";
import Landing from "./screens/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles/pageChange.css";
import "./styles/App.css";
import Content from "./screens/content";
import CursorFollower from "./components/cursorFollower";

function App() {
  return (
    <CursorFollower>
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={700} classNames="fade">
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => {
                      return <Landing />;
                    }}
                  />
                  <Route
                    exact
                    path="/tuo"
                    render={() => {
                      return <Content />;
                    }}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </CursorFollower>
  );
}

export default App;
