import React from 'react'
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import DropDownMain from "./components/DropDownMain"
import CFHistory from "./components/CFHistory"


function App() {
  const cfFacts = CFHistory.map(content => <MainContent key = {content.id} fact={content.fact}/>)
  let title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';
  
  return (
    <div>
      <Header />
      <DropDownMain/>
      {cfFacts}
      <Footer />
    </div>
  );
}

export default App;
