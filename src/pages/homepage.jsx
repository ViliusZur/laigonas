import React from 'react';

//import components
import Navbar from '../components/Navbar/index';
import Home from '../components/Home/index';

export default class Homepage extends React.Component {

  render() {
    return(
      <>
        <Navbar />
        <Home 
          title='laigonas' 
          body='Laigono sukis'
        />
      </>
    );
  }

}
