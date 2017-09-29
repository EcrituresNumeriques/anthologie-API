import {store} from '../Redux/store'

export let acl = function(condition = 'isLogedin',objectOwner = 0){

  //check condition first
  let conditionExpected = ['isLogedin','isOwner','isAdmin']
  let currentUser = store.getState().user;
  if(conditionExpected.indexOf(condition) > -1 && currentUser){
    //Switch conditions
    //isLogedin
    if(condition == conditionExpected[0]){
      if(currentUser.id_user){
        //console.log('rights granted');
        return true;
      }
    }
    //isOwner (or Admin)
    else if(condition == conditionExpected[1]){
      if(currentUser.id_user == objectOwner || currentUser.admin == true){
        return true;
      }
    }
    //isAdmin
    else if(condition == conditionExpected[2]){
      if(currentUser.admin == true){
        return true;
      }
    }
  }
    return false;
}
