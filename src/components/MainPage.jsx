import React from 'react'
import '../App.scss';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import CovidHeader from './COVIDHeader';
import CFHistory from './CFHistory'
import CFNews from './CFNews';
import Survey from './Survey'

const MainPage = () => {
    var title = document.querySelector('title');
    title.innerText = 'Clark Historic Farm';

    return (
      <div className='parallax'>
        <CovidHeader />
        <Header/>
        <Main />
        {/* <CFNews/> */}
        <CFHistory/>
        <Survey/>
        <Footer />
      </div>
    );
  }
  
  export default MainPage;