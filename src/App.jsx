import React from 'react'
import './scss/global.scss'
import { Route, Routes } from 'react-router';

import MainPage from './components/mainpage/MainPage';
import EventsPage from './components/eventspage/EventsPage';
import Education from './components/educationpage/Education';
import Volunteer from './components/volunteerpage/Volunteer';
import AboutUs from './components/aboutuspage/AboutUs';

function App() {
  var title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage/>}></Route>
        <Route exact path="/events" element={<EventsPage/>}>
          {/* <Route exact path="/barnyardbabies" element={}></Route>
          <Route exact path="/flapjacks" element={}></Route>
          <Route exact path="/kidscamps" element={}></Route>
          <Route exact path="/summerconcerts" element={}></Route>
          <Route exact path="/honeyharvest" element={}></Route> 
          <Route exact path="/nativity" element={}></Route> */}
        </Route>
        <Route exact path="/education" element={<Education/>}>
          {/* <Route exact path="/kidscamps" element={}></Route>
          <Route exact path="/fieldtrips" element={}></Route>
        <Route exact path="/scholarships" element={}></Route>
        <Route exact path="/presentations" element={}></Route> */}
        </Route>
        <Route exact path="/volunteer" element={<Volunteer/>}></Route>
        <Route exact path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;