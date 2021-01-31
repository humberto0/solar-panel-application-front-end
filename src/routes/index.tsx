import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../pages/Main';
import Simulator from '../pages/Simulator';
import Contacts from '../pages/Contacts';
import Works from '../pages/Works';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import House from '../pages/House';
import Farm from '../pages/Farm';
import Factory from '../pages/Factory';
import CustomerList from '../pages/CustomerList';
import Router from './Routes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Page} />
    <Route path="/simulator" component={Simulator} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/works" component={Works} />
    <Route path="/house" component={House} />
    <Route path="/signUp" component={SignUp} />
    <Route path="/Farm" component={Farm} />
    <Route path="/Factory" component={Factory} />
    <Router path="/signIn" component={SignIn} />
    <Router path="/customerList" component={CustomerList} isPrivate />
  </Switch>
);
export default Routes;
