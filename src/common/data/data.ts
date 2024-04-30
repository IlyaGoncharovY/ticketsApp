export type OriginType = 'VVO' | 'LRN';
export type OriginNameType = 'Владивосток' | 'Ларнака';
export type DestinationType = 'TLV' | 'UFA';
export type DestinationNameType = 'Тель-Авив' | 'Уфа';
export type CarrierType = 'TK' | 'S7' | 'SU' | 'BA';
export type StopsType = 0 | 1 | 2 | 3;

export type TicketsType = {
  origin: OriginType;
  origin_name: OriginNameType;
  destination: DestinationType;
  destination_name: DestinationNameType;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: CarrierType;
  stops: StopsType;
  price: number;
}

export const ticketsData: TicketsType[] =
    [
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
        'departure_time': '12:10',
        'arrival_date': '12.05.18',
        'arrival_time': '18:10',
        'carrier': 'SU',
        'stops': 0,
        'price': 15300,
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
      }, {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '12:10',
        'arrival_date': '12.05.18',
        'arrival_time': '20:15',
        'carrier': 'BA',
        'stops': 3,
        'price': 13400,
      }, {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '9:40',
        'arrival_date': '12.05.18',
        'arrival_time': '19:25',
        'carrier': 'SU',
        'stops': 3,
        'price': 12450,
      }, {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '17:10',
        'arrival_date': '12.05.18',
        'arrival_time': '23:45',
        'carrier': 'TK',
        'stops': 1,
        'price': 13600,
      },
      {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'UFA',
        'destination_name': 'Уфа',
        'departure_date': '12.05.18',
        'departure_time': '15:15',
        'arrival_date': '12.05.18',
        'arrival_time': '17:45',
        'carrier': 'TK',
        'stops': 1,
        'price': 33400,
      },
      {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '6:10',
        'arrival_date': '12.05.18',
        'arrival_time': '15:25',
        'carrier': 'TK',
        'stops': 0,
        'price': 14250,
      },
      {
        'origin': 'LRN',
        'origin_name': 'Ларнака',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '12:50',
        'arrival_date': '12.05.18',
        'arrival_time': '14:30',
        'carrier': 'SU',
        'stops': 1,
        'price': 7000,
      },
      {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '16:50',
        'arrival_date': '12.05.18',
        'arrival_time': '23:35',
        'carrier': 'SU',
        'stops': 1,
        'price': 16700,
      },
      {
        'origin': 'VVO',
        'origin_name': 'Владивосток',
        'destination': 'TLV',
        'destination_name': 'Тель-Авив',
        'departure_date': '12.05.18',
        'departure_time': '6:10',
        'arrival_date': '12.05.18',
        'arrival_time': '16:15',
        'carrier': 'S7',
        'stops': 0,
        'price': 17400,
      },
    ];
//----------------------------------------------
export type ButtonsTitleType = 'RUB' | 'USD' | 'EUR'
export type ButtonsType = {
  id: number
  title: ButtonsTitleType
  isCheck: boolean
}
export const ButtonsData: ButtonsType[] = [
  {id: 1, title: 'RUB', isCheck: false},
  {id: 2, title: 'USD', isCheck: false},
  {id: 3, title: 'EUR', isCheck: false},
];
//----------------------------------------------
export type CheckBoxType = {
  id: number
  title: 'Все' | 'Без пересадок' | '1 пересадка' | '2 пересадки' | '3 пересадки'
  stops: -1 | 0 | 1 | 2 | 3
  isCheck: boolean
}
export const CheckBoxData: CheckBoxType[] = [
  {id: 1, title: 'Все', stops: -1, isCheck: false},
  {id: 2, title: 'Без пересадок', stops: 0, isCheck: false},
  {id: 3, title: '1 пересадка', stops: 1, isCheck: false},
  {id: 4, title: '2 пересадки', stops: 2, isCheck: false},
  {id: 5, title: '3 пересадки', stops: 3, isCheck: false},
];
