import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfCalendarView9420Reducer from '../features/CopyOfCalendarView9420/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfCalendarView9420: CopyOfCalendarView9420Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});