import React from 'react';
import './App.css';

import { Post } from './components/Post';
import { Get } from './components/Get';
import {Navigation} from './components/Navigation'

import { Button } from "react-bootstrap";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <h1 className="text-center p-5">Quản Lý Nhân Viên</h1>
      <Navigation></Navigation>
        <Switch>
          <Route path='/' component={Get} exact></Route>
          <Route path='/post' component={Post} exact></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
