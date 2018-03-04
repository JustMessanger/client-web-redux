import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';

import * as Actions from './../actions/index';
import BaseContainer from './base/BaseContainer';
import RouterPath from '../constants/RouterPath';

class LoginContainer extends BaseContainer {
    constructor() {
        super();
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);

        this.state = {
            login: '',
        };
    }

    handleLoginChange(event) {
        this.setState({
            login: event.target.value,
        });
    }

    handleLoginRequest(event) {
        if (event.charCode === 13) {
            this.props.history.push(RouterPath.CONTACTS);
        }
    }

    render() {
        return (
            <div className="login-container">
                <TextField
                    floatingLabelText="Login"
                    onChange={this.handleLoginChange}
                    onKeyPress={this.handleLoginRequest}
                />
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
