import s from './FilerComponent.module.css';

export const FilterComponent = () => {
  return (
    <div className={s.filterContainer}>
      <div className={s.buttonContainer}>
        <div>
            Валюта
        </div>
        <div>
          <button>RUB</button>
          <button>USD</button>
          <button>EUR</button>
        </div>
      </div>
      <div className={s.checkBoxContainer}>
        <div>
            Колличество пересадок
        </div>
        <div className={s.checkBoxItemContainer}>
          <span>
            <input type={'checkbox'}/> Все
          </span>
          <span>
            <input type={'checkbox'}/> Без пересадок
          </span>
          <span>
            <input type={'checkbox'}/> 1 пересадка
          </span>
          <span>
            <input type={'checkbox'}/> 2 пересадки
          </span>
          <span>
            <input type={'checkbox'}/> 3 пересадки
          </span>
        </div>
      </div>
    </div>
  );
};
