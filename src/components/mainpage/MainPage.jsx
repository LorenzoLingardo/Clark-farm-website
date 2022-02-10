import React from 'react'
import '../../scss/global.scss'
import MainIntro from "./MainIntro"
import MainOptionsDesc from './MainOptionsDesc';

const MainPage = () => {
    return (
      <div>
        <MainIntro />
        <h1 className='bg-dark text-light flex' style={{justifyContent: "center"}}>THIS THING</h1>
        <MainOptionsDesc/>
      </div>
  );
}

export default MainPage;