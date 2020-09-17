import React from 'react';

//import components
import Navbar from '../components/navbar';
import Home from '../components/home';

export default class Homepage extends React.Component {

  render() {
    return(
      <>
        <Navbar />
        <Home 
          title='laigonas' 
          body='kazkoks sukis kazkoks sukis kazkoks sukis. implementuoti cms ir paimti suki is cms! Realiai turetu buti trumpas About cia.'
        />
        Nice
      </>
    );
  }

}
