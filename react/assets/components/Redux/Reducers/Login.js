const initialState = {languages:[],loggedIn:false};

export function login(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case 'LOG_ME_IN':
      return Object.assign({}, state, {user:action.payload})
    default:
      return state
  }
}
