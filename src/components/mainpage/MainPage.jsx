import React from 'react'
import '../../scss/global.scss'
import Survey from './Survey'
import MainIntro from "./MainIntro"
import CovidBanner from './COVIDBanner';
import MainOptionsDesc from './MainOptionsDesc';

const MainPage = () => {
    return (
      <div className='parallax'>
        <CovidBanner />
        <MainIntro />
        <MainOptionsDesc/>
        <Survey/>
      </div>
  );
}
  
export default MainPage;