import React from 'react'
import '../../scss/global.scss'
import Header from "../../Header"
import Footer from "../../Footer"
import Survey from './Survey'
import MainIntro from "./MainIntro"
import CovidBanner from './COVIDBanner';
import MainOptionsDesc from './MainOptionsDesc';

const MainPage = () => {
    return (
      <div className='parallax'>
        <CovidBanner />
        <Header/>
        <MainIntro />
        <MainOptionsDesc/>
        <Survey/>
        <Footer />
      </div>
  );
}
  
export default MainPage;