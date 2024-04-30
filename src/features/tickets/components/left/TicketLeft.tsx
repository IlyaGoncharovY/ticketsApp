import {FC} from 'react';

import {CarrierType, UniversalButton} from '../../../../common';

import BAImg from '../../../../assets/BAlogo.png';
import S7Img from '../../../../assets/S7logo.jpg';
import SUImg from '../../../../assets/SUlogo.png';
import TKImg from '../../../../assets/TKlogo.png';

import s from './TicketLeft.module.css';

const LOGO_DATA = {
  'BA': BAImg,
  'S7': S7Img,
  'SU': SUImg,
  'TK': TKImg,
};

interface ITicketLeft {
    carrier: CarrierType
    price: number
}

/**
 * component for render left part TicketItem
 * @param carrier
 * @param price
 * @constructor
 */
export const TicketLeft:FC<ITicketLeft> = ({
  carrier,
  price,
}) => {

  const onClickHandler = (price: number) => {
    alert(`цена за перелёт: ${price} рублей`);
  };

  return (
    <div className={s.ticketLeftContainer}>
      <div>
        <img
          src={LOGO_DATA[carrier]}
          alt={'logo airlines'}
          className={s.logo}
        />
      </div>
      <div className={s.buttonContainer}>
        <UniversalButton
          onClick={() => onClickHandler(price)}
          valueForOnClick={price}
          style={s.buttonItem}
        >
          <div>Купить</div>
          <div>за {price}</div>
        </UniversalButton>
      </div>
    </div>
  );
};
