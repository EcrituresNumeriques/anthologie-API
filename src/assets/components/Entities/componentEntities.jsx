import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideEntities from 'components/Entities/asideEntities';
import newEntity from 'components/Entities/newEntity';
import newEntityTranslation from 'components/Entities/newEntityTranslation';
import newEntityAuthor from 'components/Entities/newEntityAuthor';
import newEntityURI from 'components/Entities/newEntityURI';
import specificEntity from 'components/Entities/specificEntity';
import alignTextsEntity from 'components/Entities/alignTextsEntity';
import showAlignEntity from 'components/Entities/showAlignEntity';


export default class ComponentEntities extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Entities | anthologie";
  }

  render() {
    return (
      <main id="entitiesView">
        <AsideEntities />
        {this.props.children}
      </main>
    );
  }
}
