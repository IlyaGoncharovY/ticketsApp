import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ticketsData, TicketsType} from '../../../common';

export interface initialStateType {
    tickets: TicketsType[];
    selectedFilters: number[];
    currencyRate: number;
}

const initialState: initialStateType = {
  tickets: ticketsData,
  selectedFilters: [],
  currencyRate: 1,
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
    changeCurrencies: (state, action: PayloadAction<number>) => {
      if (action.payload !== state.currencyRate) {
        const newCurrencyRate = action.payload;
        const oldCurrencyRate = state.currencyRate;

        state.tickets.forEach(ticket => {
          ticket.price = Math.round(ticket.price / (newCurrencyRate / oldCurrencyRate));
        });

        state.currencyRate = newCurrencyRate ;
      }
    },
  },
});
export const {
  ticketSelection,
  changeCurrencies,
} = TicketsSlice.actions;

export default TicketsSlice.reducer;
