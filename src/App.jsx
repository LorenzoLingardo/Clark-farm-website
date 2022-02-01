import React from 'react'
import './scss/global.scss'
import { Route, Routes } from 'react-router';

import MainPage from './components/mainpage/MainPage';
import Event from './components/eventspage/Event';
import Events from './components/eventspage/Events';
import Education from './components/educationpage/Education';
import Volunteer from './components/volunteerpage/Volunteer';
import AboutUs from './components/aboutuspage/AboutUs';
import Header from './Header';
import Footer from './Footer';
import EducationOps from './components/educationpage/EducationOps';
import { Paths } from './utils/Paths';

function App() {
  var title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';

  return (
    <div>
      <Header />
      <Routes>
          <Route exact path={Paths.home} element={<MainPage/>}/>
            <Route exact path={Paths.events} element={<Events/>} />
            <Route path={Paths.eventID} element={<Event />} />

            <Route exact path={Paths.education} element={<EducationOps/>}/>
            <Route path={Paths.educationID} element={<Education/>} />
            
          <Route exact path={Paths.volunteer} element={<Volunteer/>}></Route>
          <Route exact path={Paths.aboutUs}  element={<AboutUs/>}></Route>
          <Route path='*' element={<main><p>There's nothing here!</p></main>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;