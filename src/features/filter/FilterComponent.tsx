import {useAppSelector} from '../../store';

import {UniversalTitle} from '../../common';

import {ButtonItem} from './item/button/ButtonItem.tsx';
import {CheckBoxItem} from './item/checkbox/CheckBoxItem.tsx';

import s from './FilterComponent.module.css';

export const FilterComponent = () => {

  const buttonsArr = useAppSelector(state => state.filterReducer.buttonsArr);
  const checkboxArr = useAppSelector(state => state.filterReducer.checkboxArr);

  return (
    <div className={s.filterContainer}>
      <div className={s.buttonContainer}>
        <UniversalTitle title={'Валюта'}/>
        <div className={s.buttonItemContainer}>
          {buttonsArr.map((buttonValue, index) =>
            <ButtonItem
              key={index}
              buttonValue={buttonValue}
            />,
          )}
        </div>
      </div>
      <div className={s.checkBoxContainer}>
        <UniversalTitle title={'Колличество пересадок'}/>
        <div className={s.checkBoxItemContainer}>
          {checkboxArr.map((checkBoxValue, index) =>
            <CheckBoxItem
              key={index}
              checkBoxValue={checkBoxValue}
            />,
          )}
        </div>
      </div>
    </div>
  );
};
