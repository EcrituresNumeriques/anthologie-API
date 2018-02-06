import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div>
          <h3>Anthologia palatina</h3>
          All the texts on this platform are available under the <br />
          <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License.</a><br />
          <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/">
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
        </a>
        </div>
      </footer>
    );
  }
}
