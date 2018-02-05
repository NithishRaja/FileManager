
export default function(state={payload: null, status: true}, action){
  switch(action.type){
    case "UPDATE_FILE_LIST":
      return {payload: action.payload, status: false};
    case "START_FILE_LIST_UPDATE":
      return {payload: state.payload, status: true};
    default:
      return state;
  }
}
