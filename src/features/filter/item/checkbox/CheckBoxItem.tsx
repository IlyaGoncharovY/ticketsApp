import {FC, useState} from 'react';

import {useAppSelector} from '../../../../store';
import {useCheckBoxItem} from '../../hook/useCheckBoxItem.ts';
import {CheckBoxType, UniversalButton} from '../../../../common';

import s from './CheckBoxItem.module.css';

interface ICheckBoxItem {
    checkBoxValue: CheckBoxType
}

export const CheckBoxItem: FC<ICheckBoxItem> = ({checkBoxValue}) => {
  const selectedFilters = useAppSelector(state => state.ticketsReducer.selectedFilters);
  const [text, setText] = useState<boolean>(false);
  const {onClickHandler, handleCheckboxChange} = useCheckBoxItem(selectedFilters, checkBoxValue);

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
      <label className={s.checkBocChild}>
        <input
          type={'checkbox'}
          checked={isChecked}
          disabled={isDisabled}
          onChange={() => handleCheckboxChange(checkBoxValue.stops, checkBoxValue.id)}
          className={s.originCheckbox}
        />
        <div className={s.fakeCheckbox}/>
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
      </label>
    </div>
  );
};
