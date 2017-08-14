const initialState = {languages:[],authors:[],cities:[],languagesLookup:{},authorsLookup:{},citiesLookup:{},loggedIn:false};

export function login(state = initialState, action) {
  console.log(action.type);
  let lookup = {};

  switch (action.type) {
    case 'LOG_ME_IN':
      return Object.assign({}, state, {user:action.payload,loggedIn:true})
      break;
    case 'UNLOG_USER':
      return Object.assign({}, state, {user:{},loggedIn:false})
      break;
    case 'UPDATE_AUTHORS':
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_author] = action.payload[i];
      }
      return Object.assign({},state,{authors:action.payload,authorsLookup:lookup})
    break;
    case 'UPDATE_CITIES':
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_city] = action.payload[i];
      }
      return Object.assign({},state,{cities:action.payload, citiesLookup:lookup})
    break;
    case 'UPDATE_LANGUAGES':
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_language] = action.payload[i];
      }
      return Object.assign({},state,{languages:action.payload,languagesLookup:lookup})
      break;
    case 'UPDATE_ENTITIES':
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_entity] = action.payload[i];
      }
      return Object.assign({},state,{entities:action.payload,entitiesLookup:lookup})
      break;
    case 'UPDATE_URI_SOURCE':
      for (var i = 0, len = action.payload.length; i < len; i++) {
        lookup[action.payload[i].id_URI_source] = action.payload[i];
      }
      return Object.assign({},state,{authorities:action.payload,authoritiesLookup:lookup})
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