import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

import * as Actions from './../actions/index';
import BaseContainer from './base/BaseContainer';
import RouterPath from '../constants/RouterPath';

class StartContainer extends BaseContainer {
    constructor() {
        super();
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLoginGoogle = this.handleLoginGoogle.bind(this);
        this.handleLoginDemo = this.handleLoginDemo.bind(this);
    }

    handleSignIn() {
        this.props.history.push(RouterPath.LOGIN);
    }

    handleSignUp() {
        this.props.history.push(RouterPath.LOGIN);
    }

    handleLoginGoogle() {
        this.props.history.push(RouterPath.LOGIN);
    }

    handleLoginDemo() {
        this.props.history.push(RouterPath.LOGIN);
    }

    render() {
        const style = {
            margin: '1em',
        };
        return (
            <div className="start-container">
                <RaisedButton label="Sign in" onClick={this.handleSignIn} style={style} fullWidth />
                <RaisedButton label="Sign up" primary onClick={this.handleSignUp} style={style} fullWidth />
                <RaisedButton label="Login by google" secondary onClick={this.handleLoginGoogle} style={style} fullWidth />
                <RaisedButton label="Use demo account" onClick={this.handleLoginDemo} style={style} fullWidth />
            </div>
        );
    }
}

StartContainer.propTypes = {

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

export default StartContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartContainer);
