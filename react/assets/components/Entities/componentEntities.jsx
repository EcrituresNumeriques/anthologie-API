import React, { Component } from 'react';

// components
import AsideEntities from 'components/Entities/asideEntities';
import MainEntities from 'components/Entities/mainEntities';



export default class ComponentEntities extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    document.title = "Entities | anthologie";
  }
  render() {

    return (
      <main id="authorsView">
        <AsideEntities />
        <MainEntities />
      </main>
    );
  }
}
