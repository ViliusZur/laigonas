import React from 'react';
import styles from './navbar.module.css';

import cn from '../../lib/cn';

export default class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      top: true,
    };
  };

  componentDidMount() {
    this.listener = document.addEventListener('scroll', e => {
      let scrolled = document.scrollingElement.scrollTop;
      if(scrolled >= 20) {
        if(this.state.top !== false) {
          this.setState({ top: false });
        }
      } else {
        if(this.state.top !== true) {
          this.setState({ top: true });
        }
      }
    })
  };

  componentDidUpdate() {
    document.removeEventListener('scroll', this.listener);
  };

  render() {
    return (
      <>
      <div className={this.state.top ? styles.Container : cn(styles.Container, styles.fixed)}>
        <div className={styles.Logo}>
          <a href='#Home'>Laigonas</a>
        </div>

        <div className={styles.ButtonGroup}>
          <button><a href='#About'>apie mus</a></button>
          <button><a href='#Services'>paslaugos</a></button>
          <button><a href='#Team'>komanda</a></button>
          <button><a href='#Career'>karjera</a></button>
          <button><a href='#Contacts'>kontaktai</a></button>
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
}