import {FC} from 'react';

import {TicketsType} from '../../../common';

import s from './TicketItem.module.css';

interface ITicketItem {
    ticket: TicketsType
}

export const TicketItem: FC<ITicketItem> = ({ticket}) => {
  return (
    <div className={s.ticketItemContainer}>
      <div className={s.priceContainer}>
        <div>
          {ticket.carrier}
        </div>
        <div>
          <button>
            <div>
              <div>Купить</div>
              <div>{ticket.price}</div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div>
          {ticket.departure_time}
        </div>
        <div>
          {ticket.origin}, {ticket.origin_name}
        </div>
        <div>
          {ticket.departure_date}, ПТ
        </div>
      </div>
      <div>
          пересадок {ticket.stops}
      </div>
      <div>
        <div>
          {ticket.arrival_time}
        </div>
        <div>
          {ticket.destination_name}, {ticket.destination}
        </div>
        <div>
          {ticket.arrival_time}, ПТ
        </div>
      </div>
    </div>
  );
};
