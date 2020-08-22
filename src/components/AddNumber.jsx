import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type='button'
          value='+'
          onClick={() => this.props.onClick(this.state.size)}
        ></input>
        <input
          type='text'
          value={this.state.size}
          onChange={(e) => {
            this.setState({ size: Number(e.target.value) });
          }}
        ></input>
      </div>
    );
  }
}

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: (size) => dispatch({ type: 'INCREMENT', size: size }),
  };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
