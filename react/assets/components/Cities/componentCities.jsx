import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideCities from 'components/Cities/asideCities';
import MainCities from 'components/Cities/mainCities';
import newCity from 'components/Cities/newCity';
import newCityTranslation from 'components/Cities/newCityTranslation';
import specificCity from 'components/Cities/specificCity';



export default class ComponentCities extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Cities | anthologie";
  }

  render() {

    return (
      <main id="citiesView">
        <AsideCities />
        <Router history={browserHistory}>
          <Route path="/cities" component={MainCities} />
          <Route path="/cities/new" component={newCity} />
          <Route path="/cities/newtranslation" component={newCityTranslation} />
          <Route path="/cities/newtranslation/:id" component={newCityTranslation} />
          <Route path="/cities/:id" component={specificCity} />
        </Router>
      </main>
    );
  }
}
