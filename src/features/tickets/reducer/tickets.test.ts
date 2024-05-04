import {describe, expect, it} from 'vitest';

import reducer, {changeCurrencies, initialStateType, ticketSelection} from './TicketsReducer.ts';

describe('ticketsSlice reducers', () => {

  const startState: initialStateType = {
    tickets: [
      {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '16:20',
        'arrival_date': '12.05.18',
        'arrival_time': '22:10',
        'carrier': 'TK',
        'stops': 3,
        'price': 12400,
      }, {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '17:20',
        'arrival_date': '12.05.18',
        'arrival_time': '23:50',
        'carrier': 'S7',
        'stops': 1,
        'price': 13100,
      }, {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '17:00',
        'arrival_date': '12.05.18',
        'arrival_time': '23:30',
        'carrier': 'TK',
        'stops': 2,
        'price': 11000,
      },
    ],
    selectedFilters: [0],
    currencyRate: 1,
  };

  it('should be ticket select', () => {

    const action = ticketSelection([2]);
    const endState = reducer(startState, action);

    const selectedCheckBox = endState.selectedFilters.find(el => el === 2);
    const currCheckBox = startState.tickets.findIndex(ticket => ticket.stops === 2);

    expect(selectedCheckBox).toBe(currCheckBox);
  });

  it('should be there must be a ticket price', () => {

    const action = changeCurrencies(2);
    const endState = reducer(startState, action);

    const priceTicket = endState.tickets.map(el => Math.round(el.price/49));

    expect(priceTicket[0]).toBe(127);
  });
});

