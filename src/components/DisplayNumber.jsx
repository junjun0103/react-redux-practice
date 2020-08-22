import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type='text' value={this.props.number} readOnly></input>
      </div>
    );
  }
}

function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);
