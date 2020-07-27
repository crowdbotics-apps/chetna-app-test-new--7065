import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CopyOfCalendarView9420Saga from '../features/CopyOfCalendarView9420/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CopyOfCalendarView9420Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}