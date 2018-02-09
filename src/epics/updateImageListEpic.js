import Rx from "rxjs/Rx";

export default function(action$){
  return action$.ofType("START_IMAGE_LIST_UPDATE")
    .delay(3000)
    .mergeMap(action => {
      return Rx.Observable.of({response: ["first image", "secong image", "third image", "fourth image", "fifth image"]});
    })
    .pluck("response")
    .map(response => {
      return {type: "UPDATE_IMAGE_LIST", payload: response};
    });
}
