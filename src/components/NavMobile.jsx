import styles from '../styles/navMobile.module.css';
import purse from '../assets/img/purse.svg';


function NavMobile() {
  return (
  <>
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.nav_logo}>MetaMart</div>
      <img src={purse} alt="purse logo" className={styles.nav_purse} />
    </nav>
  </>
  );
}

export default NavMobile;