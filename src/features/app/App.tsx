import {HeaderComponent} from '../header';
import {FilterComponent} from '../filter';
import {TicketsComponent} from '../tickets';

import s from './App.module.css';

export const App = () => {

  return (
    <div className={s.appContainer}>
      <HeaderComponent/>
      <div className={s.ticketParent}>
        <FilterComponent/>
        <TicketsComponent/>
      </div>
    </div>
  );
};
