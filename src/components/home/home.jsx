import React from 'react';
import { string } from 'prop-types';
import styles from './home.module.css';

const Home = ({ title, body }) => (
  <>
  <div className={styles.BackgroundContainer}>
    <div className={styles.Background} />
  </div>
  <div className={styles.Container}>
    <div className={styles.Overlay} />
    <div className={styles.TextContainer}>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Text}>{body}</div>
    </div>
  </div>
  </>
)

Home.propTypes = {
  title: string,
  body: string,
};

export default Home;