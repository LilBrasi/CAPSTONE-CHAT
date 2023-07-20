import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../Services/authenticationService';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            const currentUser = authenticationService.currentUserValue;
            if (!currentUser) {
                // non  é loggato cosi torna indietro alla pagina di login
                return (
                    <Redirect
                        to={{ pathname: '/', state: { from: props.location } }}
                    />
                );
            }

            // autorizzato cosi va al componente
            return <Component {...props} />;
        }}
    />
);

export default PrivateRoute;
