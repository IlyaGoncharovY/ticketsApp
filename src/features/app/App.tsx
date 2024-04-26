import {HeaderComponent} from '../header';
import {FilterComponent} from '../filter';
import {TicketsComponent} from '../tickets';

export function App() {

  return (
    <div>
      <HeaderComponent/>
      <FilterComponent/>
      <TicketsComponent/>
    </div>
  );
}
