import React from 'react';

//import components
import Navbar from '../components/Navbar';
import Home from '../components/Home';

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
