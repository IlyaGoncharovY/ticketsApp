import {FC} from 'react';

import {ButtonsType} from '../../../common';

interface IButtonItem {
    buttonValue: ButtonsType
}

export const ButtonItem:FC<IButtonItem> = ({buttonValue}) => {
  return (
    <div>
      <button>
        {buttonValue}
      </button>
    </div>
  );
};
