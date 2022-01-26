import React from 'react'
import './scss/global.scss'
import { Route, Routes } from 'react-router';

import MainPage from './components/mainpage/MainPage';
import EventsPage from './components/eventspage/EventsPage';
import Education from './components/educationpage/Education';
import Volunteer from './components/volunteerpage/Volunteer';
import AboutUs from './components/aboutuspage/AboutUs';
import Header from './Header';
import Footer from './Footer';

function App() {
  var title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage/>}></Route>
        <Route exact path="/events" element={<EventsPage/>}>
          <Route path=":id" element={<EventsPage />} />
          </Route>
        <Route exact path="/education" element={<Education/>}>
          {/* <Route exact path="education/kidscamps" element={}></Route>
          <Route exact path="education/fieldtrips" element={}></Route>
          <Route exact path="education/scholarships" element={}></Route>
          <Route exact path="education/presentations" element={}></Route> */}
        </Route>
        <Route exact path="/volunteer" element={<Volunteer/>}></Route>
        <Route exact path="/aboutus" element={<AboutUs/>}></Route>
        <Route path='*' element={<main><p>There's nothing here!</p></main>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;