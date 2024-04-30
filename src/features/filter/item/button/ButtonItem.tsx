import {FC} from 'react';

import {ButtonsType} from '../../../../common';
import {apiFilterSlice} from '../../api/apiFilter.ts';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {changeCurrencies} from '../../../tickets/reducer/TicketsReducer.ts';

import {changeButtonStatus} from '../../reducer/FilterReducer.ts';

import s from './ButtonItem.module.css';

interface IButtonItem {
    buttonValue: ButtonsType
}

export const ButtonItem: FC<IButtonItem> = ({buttonValue}) => {

  const activeButtonId = useAppSelector(state => state.filterReducer.activeButtonId);

  const {
    data: valutes,
    isLoading,
  } = apiFilterSlice.useGetCurrencyExchangeRatesQuery();

  const dispatch = useAppDispatch();

  const valueCurr = valutes && valutes.Valute[buttonValue.title];

  const onClickChangeCurrencies = (buttonTitle: string, buttonId: number) => {
    const valuteValue = buttonTitle === 'RUB' ? 1 : valueCurr?.Value || 1;
    dispatch(changeCurrencies(valuteValue));
    dispatch(changeButtonStatus(buttonId));
  };

  return (
    <div className={s.buttonItemContainer}>
      <button
        className={`${s.button} ${buttonValue.id === activeButtonId ? s.buttonActive : s.button}`}
        onClick={() => onClickChangeCurrencies(buttonValue.title, buttonValue.id)}
        disabled={isLoading}
      >
        {buttonValue.title}
      </button>
    </div>
  );
}
;
