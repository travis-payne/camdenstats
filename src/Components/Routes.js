
import {Switch} from 'react-router-dom';
import AuthComponent from './AuthComponent.js';
import ProtectedRoute from './ProtectedRoute.js';
import ProppedRoute from './ProppedRoute.js';
import Home from './Home.js';
import AdminControlsPlayer from './PlayerAdmin/AdminControlsPlayer.js';
import AdminControlsGame from './GameAdmin/AdminControlsGame.js';
import AdminControlsRecord from './StatsAdmin/AdminControlsRecord.js';


const Routes = ({ childProps }) => (
    <Switch>
        <ProppedRoute exact path="/" render={Home} />
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
        render={AdminControlsGame}
        props={childProps}
        />
        <ProtectedRoute
        exact
        path="/admin/record"
        render={AdminControlsRecord}
        props={childProps}
        />
  </Switch>
  );

  export default Routes;