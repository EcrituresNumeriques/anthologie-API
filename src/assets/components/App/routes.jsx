import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from 'components/App/App';

import ComponentAuthors from 'components/Authors/componentAuthors'
import ComponentKeywords from 'components/Keywords/componentKeywords'
import ComponentCities from 'components/Cities/componentCities'
import ComponentLanguages from 'components/Languages/componentLanguages'
import ComponentEntities from 'components/Entities/componentEntities'
import ComponentLogin from 'components/Credentials/componentLogin'
import ComponentRegister from 'components/Credentials/componentRegister'
import ComponentProfile from 'components/Credentials/componentProfile'
import NotFound from 'components/NotFound/NotFound';
import ErrorCompo from 'components/App/Error';
import componentHome from 'components/Home/componentHome';

//Authors
import AsideAuthors from 'components/Authors/asideAuthors';
import MainAuthors from 'components/Authors/mainAuthors';
import newAuthor from 'components/Authors/newAuthor';
import newAuthorTranslation from 'components/Authors/newAuthorTranslation';
import newAuthorImage from 'components/Authors/newAuthorImage';
import specificAuthor from 'components/Authors/specificAuthor';

//Keywords
import AsideKeywords from 'components/Keywords/asideKeywords';
import MainKeywords from 'components/Keywords/mainKeywords';
import newKeyword from 'components/Keywords/newKeyword';
import newKeywordTranslation from 'components/Keywords/newKeywordTranslation';
import specificKeyword from 'components/Keywords/specificKeyword';

//Cities
import AsideCities from 'components/Cities/asideCities';
import MainCities from 'components/Cities/mainCities';
import newCity from 'components/Cities/newCity';
import newCityTranslation from 'components/Cities/newCityTranslation';
import specificCity from 'components/Cities/specificCity';

//Entities
import AsideEntities from 'components/Entities/asideEntities';
import MainEntities from 'components/Entities/mainEntities';
import newEntity from 'components/Entities/newEntity';
import newEntityTranslation from 'components/Entities/newEntityTranslation';
import newEntityImage from 'components/Entities/newEntityImage';
import newEntityAuthor from 'components/Entities/newEntityAuthor';
import newEntityKeyword from 'components/Entities/newEntityKeyword';
import newEntityURI from 'components/Entities/newEntityURI';
import specificEntity from 'components/Entities/specificEntity';
import alignTextsEntity from 'components/Entities/alignTextsEntity';
import showAlignEntity from 'components/Entities/showAlignEntity';
import editAlignTextsEntity from 'components/Entities/editAlignTextsEntity';

//Languages
import AsideLanguages from 'components/Languages/asideLanguages';
import MainLanguages from 'components/Languages/mainLanguages';
import NewLanguage from 'components/Languages/newLanguage'
import SpecificLanguage from 'components/Languages/specificLanguage'

export const routes = (
  <Route path="/" component={App} >
    <Route path="/entities" component={ComponentEntities}>
      <IndexRoute component={MainEntities} />
      <Route path="/entities/new" component={newEntity} />
      <Route path="/entities/newtranslation" component={newEntityTranslation} />
      <Route path="/entities/newtranslation/:id" component={newEntityTranslation} />
      <Route path="/entities/newimage" component={newEntityImage} />
      <Route path="/entities/newimage/:id" component={newEntityImage} />
      <Route path="/entities/newAuthor" component={newEntityAuthor} />
      <Route path="/entities/newAuthor/:id" component={newEntityAuthor} />
      <Route path="/entities/newKeyword" component={newEntityKeyword} />
      <Route path="/entities/newKeyword/:id" component={newEntityKeyword} />
      <Route path="/entities/newURI" component={newEntityURI} />
      <Route path="/entities/newURI/:id" component={newEntityURI} />
      <Route path="/entities/:id" component={specificEntity} />
      <Route path="/entities/:id/aligntexts/:first/:second" component={alignTextsEntity} />
      <Route path="/entities/:id/showalign/:align" component={showAlignEntity} />
      <Route path="/entities/:id/editalign/:align" component={editAlignTextsEntity} />
    </Route>
    <Route path="/authors" component={ComponentAuthors}>
      <IndexRoute component={MainAuthors} />
      <Route path="/authors/new" component={newAuthor} />
      <Route path="/authors/newtranslation" component={newAuthorTranslation} />
      <Route path="/authors/newimage" component={newAuthorImage} />
      <Route path="/authors/newimage/:id" component={newAuthorImage} />
      <Route path="/authors/newtranslation/:id" component={newAuthorTranslation} />
      <Route path="/authors/:id" component={specificAuthor} />
    </Route>
    <Route path="/keywords" component={ComponentKeywords}>
      <IndexRoute component={MainKeywords} />
      <Route path="/keywords/new" component={newKeyword} />
      <Route path="/keywords/newtranslation" component={newKeywordTranslation} />
      <Route path="/keywords/newtranslation/:id" component={newKeywordTranslation} />
      <Route path="/keywords/:id" component={specificKeyword} />
    </Route>
    <Route path="cities" component={ComponentCities}>
      <IndexRoute component={MainCities} />
      <Route path="/cities/new" component={newCity} />
      <Route path="/cities/newtranslation" component={newCityTranslation} />
      <Route path="/cities/newtranslation/:id" component={newCityTranslation} />
      <Route path="/cities/:id" component={specificCity} />
    </Route>
    <Route path="languages" component={ComponentLanguages}>
      <IndexRoute component={MainLanguages} />
      <Route path="/languages/new" component={NewLanguage} />
      <Route path="/languages/:id" component={SpecificLanguage} />
    </Route>
    <Route path="register" component={ComponentRegister} />
    <Route path="login" component={ComponentLogin} />
    <Route path="profile" component={ComponentProfile} />
    <Route path="home" component={componentHome} />
    <IndexRedirect to="home"/>
  </Route>
)
