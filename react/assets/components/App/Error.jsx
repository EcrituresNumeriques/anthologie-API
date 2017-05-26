import React, { Component } from 'react';

export default class Error extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    alert('Error :');
  }

  render() {

    return (
      <div class="error">
        <h1>Errors</h1>
      </div>
    );
  }
}
