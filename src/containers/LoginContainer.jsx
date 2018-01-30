import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from './../actions/index';
import BaseContainer from './base/BaseContainer';

class LoginContainer extends BaseContainer {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="main-page-container">
				hello, world!
            </div>
        );
    }
}

LoginContainer.propTypes = {

};

function mapStateToProps(state) {
    return {
        state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),
    };
}

export default LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginContainer);
