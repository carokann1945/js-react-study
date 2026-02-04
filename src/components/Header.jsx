import style from './Header.module.css';

const Header = () => {
  const now = new Date();
  const nowString = now.toDateString();

  return (
    <div className={style.Header}>
      <h3>오늘은 📆</h3>
      <h2>{nowString}</h2>
    </div>
  );
};

export default Header;
