import headerLogo from '../../assets/airplanLogo.png';

import s from './Header.module.css';

export const HeaderComponent = () => {
  return (
    <div className={s.headerContainer}>
      <img
        src={headerLogo}
        alt="header logo"
        width={'60px'}
      />
    </div>
  );
};
