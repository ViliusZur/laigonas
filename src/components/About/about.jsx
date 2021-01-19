import React from 'react';
import {string} from 'prop-types';
import styles from './about.module.css';

const About = ({ body }) => (
  <>
  <div className={styles.Container}>
    <div className={styles.Grid}>
      <div className={styles.Title}>
        apie mus
      </div>
      <div className={styles.Text}>
        {body}
      </div>
    </div>
  </div>
  </>
);

About.propTypes = {
  text: string,
}
export default About;
