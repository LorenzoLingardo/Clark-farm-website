import React from 'react'
import '../../scss/global.scss'
import MainIntro from "./MainIntro"
import CovidBanner from './COVIDBanner';
import MainOptionsDesc from './MainOptionsDesc';

const MainPage = () => {
    return (
      <div className='parallax'>
        <CovidBanner />
        <MainIntro />
        <MainOptionsDesc/>
      </div>
  );
}
  
export default MainPage;