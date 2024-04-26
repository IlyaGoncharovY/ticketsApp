import {FC} from 'react';

import {TicketsType} from '../../../common';

interface ITicketItem {
    ticket: TicketsType
}

export const TicketItem: FC<ITicketItem> = ({ticket}) => {
  return (
    <div>
      <div>{ticket.stops}</div>
      <div>{ticket.price}</div>
      <div>{ticket.destination}</div>
    </div>
  );
};
