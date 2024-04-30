import {memo} from 'react';

import {useAppSelector} from '../../store';

import {TicketItem} from './item/TicketItem.tsx';

import s from './TicketsComponent.module.css';

export const TicketsComponent = memo(() => {

  const tickets = useAppSelector(state => state.ticketsReducer.tickets);

  return (
    <div className={s.ticketsContainer}>
      {tickets.map((ticket, index) =>
        <TicketItem
          key={`${index}-${ticket.destination}`}
          ticket={ticket}
        />,
      )}
    </div>
  );
});
