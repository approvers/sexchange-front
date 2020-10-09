import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {HomeScreen} from "./comps/home/HomeScreen";
import {Header} from "./comps/common/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
