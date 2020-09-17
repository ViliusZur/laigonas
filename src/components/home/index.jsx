import React from 'react';
import styles from './home.module.css';

const Home = ({body, title}) => {
  return (
    <>
    <div className={styles.BackgroundContainer}>
      <div className={styles.Background} />
    </div>
    <div className={styles.Container}>
      <div className={styles.TextContainer}>
        <div className={styles.Title}>
          {title}
        </div>
        {body}
      </div>
    </div>
    </>
  );
}

export default Home;