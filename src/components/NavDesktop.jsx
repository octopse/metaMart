import styles from '../styles/NavDesktop.module.css';
import { FiSearch } from "react-icons/fi";

function NavDesktop() {
  return (
  <>
    <nav className={styles.nav}>
      <div className={styles.nav_left}>
        <div className={styles.nav_left_logo}>MetaMart</div>
        <div className={styles.nav_left_menu}>
          <div className={styles.nav_left_menu_item}>Discover</div>
          <div className={styles.nav_left_menu_item}>Collections</div>
          <div className={styles.nav_left_menu_item}>Forums</div>
        </div>
      </div>
      <div className={styles.nav_right}>
        <FiSearch styles={{color: '#6B7280', fontSize: '22px', cursor: 'pointer'}}/>
        <div> 
          <label class={styles.switch}>
              <input type="checkbox" />
              <span class={styles.slider}></span>
          </label>
        </div>
        <div className={styles.nav_right_connectwallet}>Connect Wallet</div>
      </div>
    </nav>
  </>
  );
}

export default NavDesktop;