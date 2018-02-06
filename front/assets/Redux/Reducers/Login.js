const initialState = {languages:[],authors:[],cities:[],languagesLookup:{},authorsLookup:{},citiesLookup:{},keywords:[],notesLookup:[],scholiesLookup:[],loggedIn:false};

let sortByTitle = function(a, b) {
  var nameA = a.title.toUpperCase(); // ignore upper and lowercase
  var nameB = b.title.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {return -1;}
  if (nameA > nameB) {return 1;}
  return 0;
}


export function login(state = initialState, action) {
  let lookup = {};

  switch (action.type) {

    case 'LOG_ME_IN':
    console.log(action.type);
      return Object.assign({}, state, {user:action.payload,loggedIn:true})
      break;

    case 'UNLOG_USER':
    console.log(action.type);
      return Object.assign({}, state, {user:{},loggedIn:false})
      break;

    case 'UPDATE_AUTHORS':
    console.log(action.type);
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_author] = action.payload[i];
      }
      return Object.assign({},state,{authors:action.payload,authorsLookup:lookup})
    break;

    case 'UPDATE_CITIES':
    console.log(action.type);
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_city] = action.payload[i];
      }
      return Object.assign({},state,{cities:action.payload, citiesLookup:lookup})
    break;

    case 'UPDATE_LANGUAGES':
    console.log(action.type);
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_language] = action.payload[i];
      }
      return Object.assign({},state,{languages:action.payload,languagesLookup:lookup})
      break;

    case 'UPDATE_ENTITIES':
    console.log(action.type);
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_entity] = action.payload[i];
      }
      action.payload.sort(sortByTitle);
      return Object.assign({},state,{entities:action.payload,entitiesLookup:lookup})
      break;

    case 'UPDATE_URI_SOURCE':
    console.log(action.type);
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_URI_source] = action.payload[i];
      }
      return Object.assign({},state,{authorities:action.payload,authoritiesLookup:lookup})
      break;

    case 'UPDATE_KEYWORDCAT':
    console.log(action.type);
    action.payload.sort(sortByTitle);
    for (var i = 0, len = action.payload.length; i < len; i++) {
      lookup[action.payload[i].id_keyword_category] = action.payload[i];
    }
    return Object.assign({},state,{keywordCategory:action.payload,keywordCategoryLookup:lookup})
    break;

    case 'UPDATE_KEYWORDS':
    console.log(action.type);
    let unassignedKeywords = [];
    for (var i = 0, len = action.payload.length; i < len; i++) {
      lookup[action.payload[i].id_keyword] = action.payload[i];
      if(!action.payload[i].category){
        unassignedKeywords.push(action.payload[i].id_keyword);
      }
    }
    return Object.assign({},state,{keywords:action.payload,keywordsLookup:lookup,unassignedKeywords:unassignedKeywords})
    break;

    case 'UPDATE_USERS':
    console.log(action.type);
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_user] = action.payload[i];
      }
      return Object.assign({},state,{users:action.payload,usersLookup:lookup})
      break;

    case 'ADD_NOTE':
    console.log(action.type);
      lookup = state.notesLookup;
      lookup[action.payload.id_note] = action.payload;
      return Object.assign({},state,{notesLookup:lookup})
      break;

    case 'ADD_SCHOLIE':
    console.log(action.type);
      lookup = state.scholiesLookup;
      lookup[action.payload.id_scholie] = action.payload;
      return Object.assign({},state,{scholiesLookup:lookup})
      break;
/*
    //Not sure if needed
    case 'ADD_LANGUAGE':
      console.log(state);
      return Object.assign({},state,{languages:state.languages.push(action.payload)})
      break;
*/
    default:
      return state
  }
}
