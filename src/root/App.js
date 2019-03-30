import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../Landing/Landing";
import Blog from "../Landing/Blog/Blog";
import Post from "../Landing/Post/Post";

import SW from "./App.swiss";
import "../swiss/index";

export default function App() {
  return (
    <SW.Wrapper>
      <SW.NavBar>
        <SW.Link to="/">Home</SW.Link>
        <SW.Link to="/blog">Blog</SW.Link>
      </SW.NavBar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:post" component={Post} />
      </Switch>
    </SW.Wrapper>
  );
}
