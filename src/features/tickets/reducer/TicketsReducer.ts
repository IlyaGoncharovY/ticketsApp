import {createSlice} from '@reduxjs/toolkit';

import {ticketsData, TicketsType} from '../../../common';

interface initialStateType {
    tickets: TicketsType[]
}

const initialState: initialStateType = {
  tickets: ticketsData,
};

const TicketsSlice = createSlice({
  name: 'ticketsSlice',
  initialState,
  reducers: {

  },
});
export const {} = TicketsSlice.actions;

export default TicketsSlice.reducer;
