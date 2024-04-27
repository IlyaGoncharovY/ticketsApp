import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ticketsData, TicketsType} from '../../../common';

interface initialStateType {
    tickets: TicketsType[];
    selectedFilters: number[];
}

const initialState: initialStateType = {
  tickets: ticketsData,
  selectedFilters: [],
};

const TicketsSlice = createSlice({
  name: 'ticketsSlice',
  initialState,
  reducers: {
    ticketSelection: (state, action: PayloadAction<number[]>) => {
      state.selectedFilters = action.payload;
      if (state.selectedFilters.includes(-1)) {
        state.tickets = ticketsData;
      } else {
        state.tickets = ticketsData.filter(ticket => state.selectedFilters.includes(ticket.stops));
      }
    },
  },
});
export const {ticketSelection} = TicketsSlice.actions;

export default TicketsSlice.reducer;
