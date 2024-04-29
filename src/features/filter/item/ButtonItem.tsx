import {FC} from 'react';

import {ButtonsType} from '../../../common';
import {apiFilterSlice} from '../api/apiFilter.ts';
import {useAppDispatch} from '../../../store';
import {changeCurrencies} from '../../tickets/reducer/TicketsReducer.ts';

interface IButtonItem {
    buttonValue: ButtonsType
}

export const ButtonItem: FC<IButtonItem> = ({buttonValue}) => {

  const {
    data: valutes,
    isLoading,
  } = apiFilterSlice.useGetCurrencyExchangeRatesQuery();

  const dispatch = useAppDispatch();

  const valueCurr = valutes && valutes.Valute[buttonValue];

  const onClickChangeCurrencies = (buttonValue: string) => {
    const valuteValue = buttonValue === 'RUB' ? 1 : valueCurr?.Value || 1;
    dispatch(changeCurrencies(valuteValue));

  };

  return (
    <div>
      <button
        onClick={() => onClickChangeCurrencies(buttonValue)}
        disabled={isLoading}
      >
        {buttonValue}
      </button>
    </div>
  );
}
;
