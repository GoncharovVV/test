import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthLayout from '../../pages/Auth/AuthLayout';
import Home from '../../pages/Home';
import { Urls } from '../../utils/types';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route path={Urls.HOME} component={Home} exact={true} />
        <Route component={AuthLayout} />
      </Switch>
    </div>
  );
};

export default App;
