import DisplayNumber from '../components/DisplayNumber';
import React, { Component } from 'react';
import store from '../store';

export default class extends Component {
  state = { number: 0 };

  constructor(props) {
    super(props);
    store.subscribe(() => this.setState({ number: store.getState().number }));
  }
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}