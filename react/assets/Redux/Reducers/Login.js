const initialState = {languages:[],loggedIn:false};

export function login(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'LOG_ME_IN':
      return Object.assign({}, state, {user:action.payload,loggedIn:true})
      break;
    case 'UNLOG_USER':
      return Object.assign({}, state, {user:{},loggedIn:false})
      break;
    case 'UPDATE_LANGUAGES':
      return Object.assign({},state,{languages:action.payload})
      break;
    case 'ADD_LANGUAGE':
      console.log(state);
      return Object.assign({},state,{languages:state.languages.push(action.payload)})
      break;
    default:
      return state
  }
}
