import {FC, useCallback, useState} from 'react';

import {CheckBoxData, CheckBoxType, UniversalButton} from '../../../../common';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {ticketSelection} from '../../../tickets/reducer/TicketsReducer.ts';

import {changeCheckBoxStatus} from '../../reducer/FilterReducer.ts';

import s from './CheckBoxItem.module.css';

interface ICheckBoxItem {
    checkBoxValue: CheckBoxType
}

export const CheckBoxItem: FC<ICheckBoxItem> = ({checkBoxValue}) => {
  const selectedFilters = useAppSelector(state => state.ticketsReducer.selectedFilters);
  const [text, setText] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const checkBoxHandler = useCallback((stops: number, checkBoxId: number) => {
    const currentFilters = selectedFilters.includes(stops)
      ? selectedFilters.filter(filter => filter !== stops)
      : [...selectedFilters, stops];
    dispatch(ticketSelection(currentFilters));
    dispatch(changeCheckBoxStatus(checkBoxId));
  },[dispatch, selectedFilters]);

  const onClickHandler = useCallback((checkBoxId: number) => {
    const correspondingCheckBox = CheckBoxData.find(item => item.id === checkBoxId);
    if (correspondingCheckBox) {
      dispatch(ticketSelection([correspondingCheckBox.stops]));
      dispatch(changeCheckBoxStatus(checkBoxId));
    }
  }, [dispatch]);

  const handleMouseEnter = () => setText(true);
  const handleMouseLeave = () => setText(false);

  const isChecked = selectedFilters.includes(checkBoxValue.stops);
  const isDisabled = selectedFilters.length === 1 && selectedFilters[0] === checkBoxValue.stops;

  return (
    <div
      className={s.checkboxParentContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.checkBocChild}>
        <input
          type={'checkbox'}
          checked={isChecked}
          disabled={isDisabled}
          onChange={() => checkBoxHandler(checkBoxValue.stops, checkBoxValue.id)}
        />
        <span>
          {checkBoxValue.title}
        </span>
        {text && <span className={`${s.onlyText} ${isDisabled ? s.onlyTextDisabled : ''}`}>
          <UniversalButton
            onClick={() => onClickHandler(checkBoxValue.id)}
            valueForOnClick={checkBoxValue.id}
          >
            только
          </UniversalButton>
        </span>}
      </div>
    </div>
  );
};
