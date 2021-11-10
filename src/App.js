import React from 'react'
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import DropDownMain from "./DropDownMain"
import CFHistory from "./CFHistory"


function App() {
  const cfFacts = CFHistory.map(content => <MainContent key = {content.id} fact={content.fact}/>)
  var title = document.querySelector('title');
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
