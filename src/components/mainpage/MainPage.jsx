import React from 'react'
import '../../scss/global.scss'
import MainIntro from "./MainIntro"
import MainOptionsDesc from './MainOptionsDesc';

const MainPage = () => {
    return (
      <div className='parallax'>
        <MainIntro />
        <h1 className='bg-light flex' style={{justifyContent: "center"}}>THIS THING</h1>
        <MainOptionsDesc/>
      </div>
  );
}

export default MainPage;