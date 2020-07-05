import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login/index'
import UserManage from './routes/UserManage/index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <IndexPage>
          <Route path="/userManage" component={UserManage} />
        </IndexPage>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
