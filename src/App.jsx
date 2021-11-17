import React from 'react'
import './App.scss';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Dropdown from './components/Dropdown';

function App() {
  var title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';
  
  return (
    <div>
      <Header />
      <Dropdown />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
