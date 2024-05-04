import {useCallback, useEffect} from 'react';

import {useAppDispatch} from '../../../store';
import {changeCheckBoxStatus} from '../reducer/FilterReducer.ts';
import {ticketSelection} from '../../tickets/reducer/TicketsReducer.ts';
import {CheckBoxData, CheckBoxType, MAGIC_NUMBER} from '../../../common';

/**
 * custom hook to use filtering for tickets.
 * @param selectedFilters
 * @param checkBoxValue
 * @return onClickHandler
 * @return handleCheckboxChange
 */
export const useCheckBoxItem = (
  selectedFilters: number[],
  checkBoxValue: CheckBoxType,
) => {

  const dispatch = useAppDispatch();
  //------------------------------------
  const handleTicketSelection = useCallback((stops: number[], checkBoxId: number) => {
    dispatch(ticketSelection(stops));
    dispatch(changeCheckBoxStatus(checkBoxId));
  },[dispatch]);

  const handleDefaultStops = useCallback((checkBoxId: number) => {
    dispatch(ticketSelection([MAGIC_NUMBER.defaultStopsValue]));
    dispatch(changeCheckBoxStatus(checkBoxId));
  },[dispatch]);
  //----------------------------------
  const checkBoxHandler = useCallback((stops: number, checkBoxId: number) => {
    const currentFilters = selectedFilters.includes(stops)
      ? selectedFilters.filter(filter => filter !== stops)
      : [...selectedFilters, stops];
    handleTicketSelection(currentFilters, checkBoxId);
  },[handleTicketSelection, selectedFilters]);
  //------------------------------------
  const onClickHandler = useCallback((checkBoxId: number) => {
    const correspondingCheckBox = CheckBoxData.find(item => item.id === checkBoxId);
    if (correspondingCheckBox) {
      dispatch(ticketSelection([correspondingCheckBox.stops]));
      dispatch(changeCheckBoxStatus(checkBoxId));
    }
  }, [dispatch]);
  //-------------------------------------
  const handleCheckboxChange = useCallback((stops: number, checkBoxId: number) => {
    if (stops === MAGIC_NUMBER.defaultStopsValue) {
      handleDefaultStops(checkBoxId);
      return;
    }
    if (selectedFilters.includes(MAGIC_NUMBER.defaultStopsValue)) {
      handleTicketSelection([stops], checkBoxId);
      dispatch(changeCheckBoxStatus(CheckBoxData.find(item => item.stops === MAGIC_NUMBER.defaultStopsValue)?.id || 0));
    } else {
      checkBoxHandler(stops, checkBoxId);
    }
  },[checkBoxHandler, dispatch, handleDefaultStops, handleTicketSelection, selectedFilters]);

  useEffect(() => {
    if (
      checkBoxValue.stops === MAGIC_NUMBER.defaultStopsValue
      && !selectedFilters.includes(MAGIC_NUMBER.defaultStopsValue)
    ) {
      handleDefaultStops(checkBoxValue.id);
    }
  }, []);

  return {
    onClickHandler,
    handleCheckboxChange,
  };
};
