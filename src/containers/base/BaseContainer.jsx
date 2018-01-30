import { Component } from 'react';

export default class BaseContainer extends Component {
    constructor() {
        super();
    }

    getText(key) {
        return key;
    }
}
