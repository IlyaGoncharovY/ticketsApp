import {useAppSelector} from '../../store';

import {TicketItem} from './item/TicketItem.tsx';

export const TicketsComponent = () => {

  const tickets = useAppSelector(state => state.ticketsReducer.tickets);

  return (
    <div>
      {tickets.map((ticket, index) =>
        <TicketItem
          key={index} 
          ticket={ticket}
        />,
      )}
    </div>
  );
};
