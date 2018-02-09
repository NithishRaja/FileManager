
export default function(state=null, action){
  switch(action.type){
    case "UPDATE_IMAGE_LIST":
      return action.payload;
    default:
      return state;
  }
}
