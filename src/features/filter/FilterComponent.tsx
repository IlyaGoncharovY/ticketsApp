import {ButtonsData, CheckBoxData} from '../../common';

import s from './FilerComponent.module.css';
import {ButtonItem} from './item/ButtonItem.tsx';
import {CheckBoxItem} from './item/CheckBoxItem.tsx';

export const FilterComponent = () => {
  return (
    <div className={s.filterContainer}>
      <div className={s.buttonContainer}>
        <div>
          Валюта
        </div>
        <div className={s.buttonItemContainer}>
          {ButtonsData.map((buttonValue, index) =>
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
          {CheckBoxData.map((checkBoxValue, index) =>
            <CheckBoxItem key={index} checkBoxValue={checkBoxValue}/>,
          )}
        </div>
      </div>
    </div>
  );
};
