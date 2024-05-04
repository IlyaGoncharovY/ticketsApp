import {memo} from 'react';

import {useAppSelector} from '../../store';

import {TicketItem} from './item/TicketItem.tsx';

import s from './TicketsComponent.module.css';

export const TicketsComponent = memo(() => {

  const tickets = useAppSelector(state => state.ticketsReducer.tickets);

  const sortedTickets = [...tickets].sort((a, b) => a.price - b.price);

  return (
    <div className={s.ticketsContainer}>
      {sortedTickets.map((ticket, index) =>
        <TicketItem
          key={`${index}-${ticket.destination}`}
          ticket={ticket}
        />,
      )}
    </div>
  );
});
