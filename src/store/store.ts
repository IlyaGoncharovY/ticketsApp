import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import ticketsReducer from '../features/tickets/reducer/TicketsReducer.ts';

export const store = configureStore({
  reducer: {
    ticketsReducer: ticketsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
