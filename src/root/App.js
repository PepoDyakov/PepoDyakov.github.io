import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Blog from '../Landing/Blog/Blog';
import Post from '../Landing/Post/Post';
import NotFound from '../NotFound/NotFound';
import Logo from '../logo.svg';

import SW from './App.swiss';
import '../swiss/index';

export default function App() {
  return (
    <SW.Wrapper>
      <SW.NavBar>
        <SW.Link to="/">
          <SW.Logo src={Logo} />
        </SW.Link>
        <SW.Link to="/blog">thoughts</SW.Link>
      </SW.NavBar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/blog" component={Blog} />
        <Route path="/test/:post" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </SW.Wrapper>
  );
}
