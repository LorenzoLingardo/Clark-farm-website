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
import Educations from './components/educationpage/Educations';

function App() {
  var title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage/>}></Route>
        {/* TODO: create parent-child route between Events and Event */}
        <Route exact path="/events" element={<Events/>}>
          <Route path=":id" element={<Event />} />
        </Route>
        <Route exact path="/education" element={<Educations/>}>
          <Route path=":id" element={<Education/>} />
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