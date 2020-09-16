import React from 'react';
import styles from './navbar.module.css';

const navbar = () => {
  return (
    <>
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <a href='#Home'>Laigonas</a>
      </div>

      <div className={styles.ButtonGroup}>
        <button><a href='#About'>About</a></button>
        <button><a href='#Mission'>Mission</a></button>
        <button><a href='#Fleet'>Fleet</a></button>
        <button><a href='#Team'>Team</a></button>
        <button><a href='#Contacts'>Contact</a></button>
      </div>

      <div className={styles.Dropdown}>
        <button className={styles.DropButton}>MENU</button>
        <div className={styles.DropdownContent}>
          <a href='#About'>About</a>
          <a href='#Mission'>Mission</a>
          <a href='#Fleet'>Fleet</a>
          <a href='#Team'>Team</a>
          <a href='#Contacts'>Contact</a>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default navbar;
