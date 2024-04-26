import {FC} from 'react';

import {CheckBoxType} from '../../../common';

interface ICheckBoxItem {
    checkBoxValue: CheckBoxType
}

export const CheckBoxItem: FC<ICheckBoxItem> = ({checkBoxValue}) => {
  return (
    <span>
      <input type={'checkbox'}/> {checkBoxValue}
    </span>
  );
};
