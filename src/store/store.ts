import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';

import ticketsReducer from '../features/tickets/reducer/TicketsReducer.ts';
import {apiFilterSlice} from '../features/filter/api/apiFilter.ts';
import FilterReducer from '../features/filter/reducer/FilterReducer.ts';


const rootReducer = combineReducers({
  ticketsReducer: ticketsReducer,
  filterReducer: FilterReducer,
  [apiFilterSlice.reducerPath]: apiFilterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(apiFilterSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
