
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthComponent from './AuthComponent.js';
import ProtectedRoute from './ProtectedRoute.js';
import ProppedRoute from './ProppedRoute.js';
import HomeBody from './HomeBody.js';
import AdminControlsPlayer from './AdminControlsPlayer.js';



const Routes = ({ childProps }) => (
    <Switch>
        <Route exact path="/" render={HomeBody} />
        <ProppedRoute 
            exact 
            path="/auth" 
            render={AuthComponent}
            props={childProps}
        />
        <ProtectedRoute
        exact
        path="/admin/players"
        render={AdminControlsPlayer}
        props={childProps}
        />
        <ProtectedRoute
        exact
        path="/admin/game"
        render={AdminControlsPlayer}
        props={childProps}
        />
        <ProtectedRoute
        exact
        path="/admin/record"
        render={AdminControlsPlayer}
        props={childProps}
        />
        <Route exact path="/about" render={() => <div>About Content</div>} />
  </Switch>
  );

  export default Routes;