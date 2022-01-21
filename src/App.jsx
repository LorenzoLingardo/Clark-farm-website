import React from 'react'
import './scss/global.scss'

import { Routes } from 'react-router';
import MainPage from './components/mainpage/MainPage';
import EventsPage from './components/eventspage/EventsPage';

function App() {
  var title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';

  return (
    <div>
      {/* <Routes>
            <Route exact path="/" element={<MainPage />}/>
            <Route exact path="/footer" element={<Footer />}/>
            <Route exact path="/main" element={<Main />}/>
            <Route exact path="/dropdown" element={<Dropdown />}/>
          </Routes> */}
      {/* <MainPage /> */}
      <EventsPage />
    </div>
  );
}

export default App;