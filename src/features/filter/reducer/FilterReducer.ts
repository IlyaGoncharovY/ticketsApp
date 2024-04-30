import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ButtonsData, ButtonsType, CheckBoxData, CheckBoxType} from '../../../common';

interface initialStateType {
    buttonsArr: ButtonsType[];
    checkboxArr: CheckBoxType[];
    activeButtonId: number ;
    activeCheckBoxId: number ;
}

const initialState: initialStateType = {
  buttonsArr: ButtonsData,
  checkboxArr: CheckBoxData,
  activeButtonId: 1,
  activeCheckBoxId: 1,
};

const FilterReducer = createSlice({
  name: 'FilterReducer',
  initialState,
  reducers: {
    changeButtonStatus: (state, action: PayloadAction<number>) => {
      state.activeButtonId = action.payload;
    },
    changeCheckBoxStatus: (state, action: PayloadAction<number>) => {
      state.activeCheckBoxId = action.payload;
    },
  },
});
export const {
  changeButtonStatus,
  changeCheckBoxStatus,
} = FilterReducer.actions;

export default FilterReducer.reducer;
