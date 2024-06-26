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
    departure_time: string
    departure_date: string
}

/**
 * component for render left part TicketItem
 * @param carrier
 * @param price
 * @param departure_time
 * @param departure_date
 * @constructor
 */
export const TicketLeft:FC<ITicketLeft> = ({
  carrier,
  price,
  departure_time,
  departure_date,
}) => {

  const onClickHandler = (departure_date:string, departure_time: string) => {
    alert(`Приобретён билет! дата вылета: ${departure_date}, время: ${departure_time}`);
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
          onClick={() => onClickHandler(departure_date, departure_time)}
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
