import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RouterPath from './../constants/RouterPath';

import BaseContainer from './base/BaseContainer';
import LoginContainer from './LoginContainer';

export default class RouterContainer extends BaseContainer {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path={RouterPath.LOGIN}
                        component={LoginContainer}
                    />
                    <Route exact path="/" component={LoginContainer} />
                    <Route component={LoginContainer} />
                </Switch>
            </div>
        );
    }
}
RouterContainer.propTypes = {

};
