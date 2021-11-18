import React from 'react'
import './App.scss';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Dropdown from './components/Dropdown';
import CFHistory from './components/CFHistory';
import {Routes, Route} from "react-router-dom";

function App() {
  const cfFacts = CFHistory.map(content => <Main key = {content.id} fact={content.fact}/>)
  var title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';
  
  return (
    <div>
        {/* <Routes>
          <Route exact path="/" element={<Header />}/>
          <Route exact path="/footer" element={<Footer />}/>
          <Route exact path="/main" element={<Main />}/>
          <Route exact path="/dropdown" element={<Dropdown />}/>
        </Routes> */}
      <Header />
      <Dropdown />
      {cfFacts}
      <Footer />
    </div>
  );
}

export default App;
