import headerLogo from '../../assets/airplanLogo.png';

export const HeaderComponent = () => {
  return (
    <div style={{
      marginTop: '20px',
    }}>
      <img
        src={headerLogo}
        alt="header logo"
        width={'60px'}
      />
    </div>
  );
};
