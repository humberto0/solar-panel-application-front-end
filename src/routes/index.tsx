import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../pages/Main';
import Simulator from '../pages/Simulator';
import Contacts from '../pages/Contacts';
import Works from '../pages/Works';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import CustomerList from '../pages/CustomerList';
import Router from './Routes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Page} />
    <Route path="/simulator" component={Simulator} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/works" component={Works} />
    <Route path="/singUp" component={SignUp} />
    <Router path="/signIn" component={SignIn} />
    <Router path="/customerList" component={CustomerList} isPrivate />
  </Switch>
);
export default Routes;
