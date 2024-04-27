import {FC} from 'react';

import {CheckBoxType} from '../../../common';
import {useAppDispatch, useAppSelector} from '../../../store';
import {ticketSelection} from '../../tickets/reducer/TicketsReducer.ts';

interface ICheckBoxItem {
    checkBoxValue: CheckBoxType
}

export const CheckBoxItem: FC<ICheckBoxItem> = ({checkBoxValue}) => {
  const selectedFilters = useAppSelector(state => state.ticketsReducer.selectedFilters);
  const dispatch = useAppDispatch();

  const checkBoxHandler = (stops: number) => {
    const currentFilters = selectedFilters.slice();
    const index = currentFilters.indexOf(stops);
    if (index !== -1) {
      currentFilters.splice(index, 1);
    } else {
      currentFilters.push(stops);
    }
    dispatch(ticketSelection(currentFilters));
  };

  const isDisabled = selectedFilters.length === 1 && selectedFilters[0] === checkBoxValue.stops;

  return (
    <span>
      <input
        type={'checkbox'}
        disabled={isDisabled}
        onClick={() => checkBoxHandler(checkBoxValue.stops)}
      /> {checkBoxValue.title}
    </span>
  );
};
