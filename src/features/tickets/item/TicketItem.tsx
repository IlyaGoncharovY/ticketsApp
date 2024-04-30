import {FC} from 'react';

import {TicketsType} from '../../../common';

import TKImg from '../../../../src/assets/TKlogo.png';
import BAImg from '../../../../src/assets/BAlogo.png';
import S7Img from '../../../../src/assets/S7logo.jpg';
import SUImg from '../../../../src/assets/SUlogo.png';
import airLine from '../../../assets/lineAirImg.jpg';

import s from './TicketItem.module.css';

export const LOGO_DATA = {
  'BA': BAImg,
  'S7': S7Img,
  'SU': SUImg,
  'TK': TKImg,
};

interface ITicketItem {
    ticket: TicketsType
}

export const TicketItem: FC<ITicketItem> = ({ticket}) => {

  const onClickHandler = (price: number) => {
    alert(`цена за перелёт: ${price} рублей`);
  };

  return (
    <div className={s.ticketItemContainer}>
      <div className={s.priceContainer}>
        <div>
          <img
            src={LOGO_DATA[ticket.carrier]}
            alt={'logo airlines'}
            className={s.logo}
          />
        </div>
        <div className={s.buttonContainer}>
          <button
            className={s.buttonItem}
            onClick={() => onClickHandler(ticket.price)}
          >
            <div>
              <div>Купить</div>
              <div>за {ticket.price}</div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className={s.descriptionUp}>
          {ticket.departure_time}
        </div>
        <div className={s.descriptionDown}>
          {ticket.origin}, {ticket.origin_name}
        </div>
        <div style={{opacity: '0.7'}}>
          {ticket.departure_date}, ПТ
        </div>
      </div>
      <div className={s.logoContainer}>
        <div>
          {ticket.stops} пересадок
        </div>
        <img
          src={airLine} alt="line air"
          width={'190px'}
          style={{opacity: '0.7'}}
        />
      </div>
      <div>
        <div className={s.descriptionUp}>
          {ticket.arrival_time}
        </div>
        <div className={s.descriptionDown}>
          {ticket.destination_name}, {ticket.destination}
        </div>
        <div style={{opacity: '0.7'}}>
          {ticket.arrival_time}, ПТ
        </div>
      </div>
    </div>
  );
};
