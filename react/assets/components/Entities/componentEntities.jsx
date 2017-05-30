import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideEntities from 'components/Entities/asideEntities';
import MainEntities from 'components/Entities/mainEntities';
import newEntity from 'components/Entities/newEntity';
import newEntityTranslation from 'components/Entities/newEntityTranslation';
import newEntityAuthor from 'components/Entities/newEntityAuthor';
import newEntityURI from 'components/Entities/newEntityURI';
import specificEntity from 'components/Entities/specificEntity';
import alignTextsEntity from 'components/Entities/alignTextsEntity';



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
        <Router history={browserHistory}>
          <Route path="/entities" component={MainEntities} />
          <Route path="/entities/new" component={newEntity} />
          <Route path="/entities/newtranslation" component={newEntityTranslation} />
          <Route path="/entities/newtranslation/:id" component={newEntityTranslation} />
          <Route path="/entities/newAuthor" component={newEntityAuthor} />
          <Route path="/entities/newAuthor/:id" component={newEntityAuthor} />
          <Route path="/entities/newURI" component={newEntityURI} />
          <Route path="/entities/newURI/:id" component={newEntityURI} />
          <Route path="/entities/:id" component={specificEntity} />
          <Route path="/entities/:id/aligntexts/:first/:second" component={alignTextsEntity} />
        </Router>
      </main>
    );
  }
}
