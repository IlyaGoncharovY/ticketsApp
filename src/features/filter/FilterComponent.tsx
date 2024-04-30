import {useAppSelector} from '../../store';

import s from './FilterComponent.module.css';
import {ButtonItem} from './item/button/ButtonItem.tsx';
import {CheckBoxItem} from './item/checkbox/CheckBoxItem.tsx';

export const FilterComponent = () => {

  const buttonsArr = useAppSelector(state => state.filterReducer.buttonsArr);
  const checkboxArr = useAppSelector(state => state.filterReducer.checkboxArr);

  return (
    <div className={s.filterContainer}>
      <div className={s.buttonContainer}>
        <div>
          Валюта
        </div>
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
        <div>
            Колличество пересадок
        </div>
        <div className={s.checkBoxItemContainer}>
          {checkboxArr.map((checkBoxValue, index) =>
            <CheckBoxItem key={index} checkBoxValue={checkBoxValue}/>,
          )}
        </div>
      </div>
    </div>
  );
};
