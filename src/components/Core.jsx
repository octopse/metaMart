import style from '../styles/core.module.css';
import Hero from './Hero';

function Core(){
  return(
    <main className={style.core_container}>
      <Hero />
    </main>
  );
}

export default Core;