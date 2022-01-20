import React from 'react'
import '../../scss/global.scss'
import Header from "./Header"
import Footer from "./Footer"
import MainIntro from "./MainIntro"
import CovidHeader from './COVIDHeader';
import Survey from './Survey'
import MainOptionsDesc from './MainOptionsDesc';

const MainPage = () => {
    var title = document.querySelector('title');
    title.innerText = 'Clark Historic Farm';

    return (
      <div className='parallax'>
        <CovidHeader />
        <Header/>
        <MainIntro />
        <MainOptionsDesc/>
        <Survey/>
        <Footer />
      </div>
  );
}
  
export default MainPage;