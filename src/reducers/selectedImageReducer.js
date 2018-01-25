
export default function(state=null, action){

  switch(action.type){
    case "UPDATE_SELECTED_IMAGE":
      return action.payload;
    default:
      return state;
  }
}
