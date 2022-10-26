import style from '../styles/nav.module.css';
import { FiSearch } from "react-icons/fi";

function Nav() {
  return (
  <header>
    <nav className={style.nav}>
      <div className={style.nav_left}>
        <div className={style.nav_left_logo}>MetaMart</div>
        <div className={style.nav_left_menu}>
          <div className={style.nav_left_menu_item}>Discover</div>
          <div className={style.nav_left_menu_item}>Collections</div>
          <div className={style.nav_left_menu_item}>Forums</div>
        </div>
      </div>
      <div className={style.nav_right}>
        <FiSearch style={{color: '#6B7280', fontSize: '22px', cursor: 'pointer'}}/>
        {/* the toggle */}
        <div className={style.nav_right_connectwallet}>Connect Wallet</div>
      </div>
    </nav>
  </header>
  );
}

export default Nav;