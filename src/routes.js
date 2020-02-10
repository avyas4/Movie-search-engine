import React from 'react';
import { Route, Switch } from "react-router-dom";
import Movies from './components/Movies/Movies';

const Routes = () => {
    return (
        <Route
            path="*"
            render={({ location }) => (
                <React.Fragment>
                    <Switch location={location}>
                        <Route exact path='/' component={Movies} />
                    </Switch>
                </React.Fragment>
            )}
        />
    );
};

export default Routes;
