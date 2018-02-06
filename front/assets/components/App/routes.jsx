import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from 'components/App/App';

import ComponentAuthors from 'components/Authors/componentAuthors'
import ComponentKeywords from 'components/Keywords/componentKeywords'
import ComponentKeywordCategories from 'components/KeywordCategories/componentKeywordCategories'
import ComponentCities from 'components/Cities/componentCities'
import ComponentLanguages from 'components/Languages/componentLanguages'
import ComponentEntities from 'components/Entities/componentEntities'
import ComponentNotes from 'components/Notes/componentNotes'
import ComponentScholies from 'components/Scholies/componentScholies'
import ComponentLogin from 'components/Credentials/componentLogin'
import ComponentRegister from 'components/Credentials/componentRegister'
import ComponentProfile from 'components/Credentials/componentProfile'
import NotFound from 'components/NotFound/NotFound';
import ErrorCompo from 'components/App/Error';
import componentSoloblock from 'components/App/componentSoloblock';
import componentHome from 'components/Home/componentHome';

//Authors
import AsideAuthors from 'components/Authors/asideAuthors';
import MainAuthors from 'components/Authors/mainAuthors';
import newAuthor from 'components/Authors/newAuthor';
import newAuthorVersion from 'components/Authors/newAuthorVersion';
import newAuthorImage from 'components/Authors/newAuthorImage';
import specificAuthor from 'components/Authors/specificAuthor';

//Keywords
import AsideKeywords from 'components/Keywords/asideKeywords';
import MainKeywords from 'components/Keywords/mainKeywords';
import newKeyword from 'components/Keywords/newKeyword';
import newKeywordVersion from 'components/Keywords/newKeywordVersion';
import specificKeyword from 'components/Keywords/specificKeyword';

//Categories keywords
import AsideKeywordCategories from 'components/KeywordCategories/asideKeywordCategories';
import MainKeywordCategories from 'components/KeywordCategories/mainKeywordCategories';
import specificKeywordCategory from 'components/KeywordCategories/specificKeywordCategory';
import newKeywordCategory from 'components/KeywordCategories/newKeywordCategory';

//Cities
import AsideCities from 'components/Cities/asideCities';
import MainCities from 'components/Cities/mainCities';
import newCity from 'components/Cities/newCity';
import newCityVersion from 'components/Cities/newCityVersion';
import specificCity from 'components/Cities/specificCity';

//Entities
import AsideEntities from 'components/Entities/asideEntities';
import MainEntities from 'components/Entities/mainEntities';
import newEntity from 'components/Entities/newEntity';
import newEntityVersion from 'components/Entities/newEntityVersion';
import newEntityDraft from 'components/Entities/newEntityDraft';
import editEntityDraft from 'components/Entities/editEntityDraft';
import newEntityImageManuscript from 'components/Entities/newEntityImageManuscript';
import newEntityImage from 'components/Entities/newEntityImage';
import newEntityAuthor from 'components/Entities/newEntityAuthor';
import newEntityScholie from 'components/Entities/newEntityScholie';
import newEntityNote from 'components/Entities/newEntityNote';
import newEntityInternalRef from 'components/Entities/newEntityInternalRef';
import newEntityExternalRef from 'components/Entities/newEntityExternalRef';
import newEntityKeyword from 'components/Entities/newEntityKeyword';
import newEntityURI from 'components/Entities/newEntityURI';
import specificEntity from 'components/Entities/specificEntity';
import alignTextsEntity from 'components/Entities/alignTextsEntity';
import showAlignEntity from 'components/Entities/showAlignEntity';
import editAlignTextsEntity from 'components/Entities/editAlignTextsEntity';

//Notes
import AsideNotes from 'components/Notes/asideNotes';
import MainNotes from 'components/Notes/mainNotes';
import newNote from 'components/Notes/newNote';
import newNoteVersion from 'components/Notes/newNoteVersion';
import editNoteVersion from 'components/Notes/editNoteVersion';
import newNoteEntity from 'components/Notes/newNoteEntity';
import newNoteImage from 'components/Notes/newNoteImage';
import specificNote from 'components/Notes/specificNote';

//Scholies
import AsideScholies from 'components/Scholies/asideScholies';
import MainScholies from 'components/Scholies/mainScholies';
import newScholie from 'components/Scholies/newScholie';
import newScholieVersion from 'components/Scholies/newScholieVersion';
import editScholieVersion from 'components/Scholies/editScholieVersion';
import newScholieEntity from 'components/Scholies/newScholieEntity';
import newScholieImage from 'components/Scholies/newScholieImage';
import specificScholie from 'components/Scholies/specificScholie';

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
      <Route path="/entities/newversion" component={newEntityVersion} />
      <Route path="/entities/newversion/:id" component={newEntityVersion} />
      <Route path="/entities/newdraft" component={newEntityDraft} />
      <Route path="/entities/newdraft/:id" component={newEntityDraft} />
      <Route path="/entities/draft/:draft" component={editEntityDraft} />
      <Route path="/entities/newimage" component={newEntityImage} />
      <Route path="/entities/newimage/:id" component={newEntityImage} />
      <Route path="/entities/newImageManuscript" component={newEntityImageManuscript} />
      <Route path="/entities/newImageManuscript/:id" component={newEntityImageManuscript} />
      <Route path="/entities/newAuthor" component={newEntityAuthor} />
      <Route path="/entities/newAuthor/:id" component={newEntityAuthor} />
      <Route path="/entities/newScholie/:id" component={newEntityScholie} />
      <Route path="/entities/newNote/:id" component={newEntityNote} />
      <Route path="/entities/newInternalRef/:id" component={newEntityInternalRef} />
      <Route path="/entities/newExternalRef/:id" component={newEntityExternalRef} />
      <Route path="/entities/newKeyword" component={newEntityKeyword} />
      <Route path="/entities/newKeyword/:id" component={newEntityKeyword} />
      <Route path="/entities/newURI" component={newEntityURI} />
      <Route path="/entities/newURI/:id" component={newEntityURI} />
      <Route path="/entities/:id" component={specificEntity} />
    </Route>
    <Route path="/notes" component={ComponentNotes}>
      <IndexRoute component={MainNotes} />
      <Route path="/notes/new" component={newNote} />
      <Route path="/notes/newversion" component={newNoteVersion} />
      <Route path="/notes/newversion/:id" component={newNoteVersion} />
      <Route path="/notes/editversion/:noteversion" component={editNoteVersion} />
      <Route path="/notes/newentity/:id" component={newNoteEntity} />
      <Route path="/notes/newimage" component={newNoteImage} />
      <Route path="/notes/newimage/:id" component={newNoteImage} />
      <Route path="/notes/:id" component={specificNote} />
    </Route>
    <Route path="/scholies" component={ComponentScholies}>
      <IndexRoute component={MainScholies} />
      <Route path="/scholies/new" component={newScholie} />
      <Route path="/scholies/newversion" component={newScholieVersion} />
      <Route path="/scholies/newversion/:id" component={newScholieVersion} />
      <Route path="/scholies/editversion/:scholieversion" component={editScholieVersion} />
      <Route path="/scholies/newentity/:id" component={newScholieEntity} />
      <Route path="/scholies/newimage" component={newScholieImage} />
      <Route path="/scholies/newimage/:id" component={newScholieImage} />
      <Route path="/scholies/:id" component={specificScholie} />
    </Route>
    <Route path="/authors" component={ComponentAuthors}>
      <IndexRoute component={MainAuthors} />
      <Route path="/authors/new" component={newAuthor} />
      <Route path="/authors/newversion" component={newAuthorVersion} />
      <Route path="/authors/newimage" component={newAuthorImage} />
      <Route path="/authors/newimage/:id" component={newAuthorImage} />
      <Route path="/authors/newversion/:id" component={newAuthorVersion} />
      <Route path="/authors/:id" component={specificAuthor} />
    </Route>
    <Route path="/keywordCategories" component={ComponentKeywordCategories}>
      <IndexRoute component={MainKeywordCategories} />
      <Route path="/keywordCategories/new" component={newKeywordCategory} />
      <Route path="/keywordCategories/:id" component={specificKeywordCategory} />
    </Route>
    <Route path="/keywords" component={ComponentKeywords}>
      <IndexRoute component={MainKeywords} />
      <Route path="/keywords/new" component={newKeyword} />
      <Route path="/keywords/newversion" component={newKeywordVersion} />
      <Route path="/keywords/newversion/:id" component={newKeywordVersion} />
      <Route path="/keywords/:id" component={specificKeyword} />
    </Route>
    <Route path="cities" component={ComponentCities}>
      <IndexRoute component={MainCities} />
      <Route path="/cities/new" component={newCity} />
      <Route path="/cities/newversion" component={newCityVersion} />
      <Route path="/cities/newversion/:id" component={newCityVersion} />
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
    <Route component={componentSoloblock}>
      <Route path="/entities/:id/aligntexts/:first/:second" component={alignTextsEntity} />
      <Route path="/entities/:id/showalign/:align" component={showAlignEntity} />
      <Route path="/entities/:id/editalign/:align" component={editAlignTextsEntity} />
    </Route>
    <IndexRedirect to="home"/>
  </Route>
)
