import React from 'react'
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"



function App() {
  let title = document.querySelector('title');
  title.innerText = 'Clark Historic Farm';
  
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
