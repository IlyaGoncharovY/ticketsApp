import {FC} from 'react';

import airLine from '../../../../assets/lineAirImg.jpg';

import {DestinationNameType,
  DestinationType,
  OriginNameType,
  OriginType,
  StopsType} from '../../../../common';

import s from './TicketRight.module.css';

interface ITicketRight {
    departure_time: string
    origin: OriginType
    origin_name: OriginNameType
    departure_date: string
    stops: StopsType
    arrival_time: string
    destination_name: DestinationNameType
    destination: DestinationType

}

/**
 * component for render right part TicketItem
 * @param departure_time
 * @param origin
 * @param origin_name
 * @param departure_date
 * @param stops
 * @param arrival_time
 * @param destination_name
 * @param destination
 * @constructor
 */
export const TicketRight:FC<ITicketRight> = ({
  departure_time,
  origin,
  origin_name,
  departure_date,
  stops,
  arrival_time,
  destination_name,
  destination,
}) => {
  return (
    <>
      <div>
        <div className={s.descriptionUp}>
          {departure_time}
        </div>
        <div className={s.descriptionDown}>
          {origin}, {origin_name}
        </div>
        <div className={s.commonOpacity}>
          {departure_date}, ПТ
        </div>
      </div>
      <div className={s.logoContainer}>
        <div>
          {stops} пересадок
        </div>
        <img
          src={airLine} alt="line air"
          width={'190px'}
          className={s.commonOpacity}
        />
      </div>
      <div>
        <div className={s.descriptionUp}>
          {arrival_time}
        </div>
        <div className={s.descriptionDown}>
          {destination_name}, {destination}
        </div>
        <div className={s.commonOpacity}>
          {arrival_time}, ПТ
        </div>
      </div>
    </>
  );
};
