import styles from '../styles/toggle.module.css';
import { FiSearch } from "react-icons/fi";

function Toggle() {
  return (
    <div> 
      <label class={styles.switch}>
          <input type="checkbox" />
          <span class={styles.slider}></span>
      </label>
    </div>
  )
}

export default Toggle;