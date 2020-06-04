import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import NotFound from '../containers/NotFound.jsx';
import Layout from '../components/Layout.jsx';
import '../styles/App.scss';
import '../assets/scss/theme.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login}/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;