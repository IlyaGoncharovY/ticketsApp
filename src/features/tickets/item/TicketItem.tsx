import {FC, memo} from 'react';

import {TicketsType} from '../../../common';
import {TicketLeft} from '../components/left/TicketLeft.tsx';

import {TicketRight} from '../components/right/TicketRight.tsx';

import s from './TicketItem.module.css';

interface ITicketItem {
    ticket: TicketsType
}

export const TicketItem: FC<ITicketItem> = memo(({ticket}) => {

  return (
    <div className={s.ticketItemContainer}>
      <TicketLeft
        carrier={ticket.carrier}
        price={ticket.price}
      />
      <TicketRight
        departure_time={ticket.departure_time}
        origin={ticket.origin}
        origin_name={ticket.origin_name}
        departure_date={ticket.departure_date}
        stops={ticket.stops}
        arrival_time={ticket.arrival_time}
        destination_name={ticket.destination_name}
        destination={ticket.destination}
      />
    </div>
  );
});
