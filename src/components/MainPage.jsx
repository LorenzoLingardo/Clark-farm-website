import React from 'react'
import '../App.scss';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Dropdown from './Dropdown';
import CFHistory from './CFHistory'
import CFFacts from './CFFacts'
import CFNews from './CFNews';
import {Routes, Route} from "react-router-dom"
import Survey from './Survey'
import News from './News'

function MainPage() {
    var title = document.querySelector('title');
    title.innerText = 'Clark Historic Farm';
    const cfFacts = CFHistory.map(content => {
      return (
        <CFFacts 
          key={content.id} 
          {...content} 
        />)
    })

    const cfNews = CFNews.map(news => {
      return (
        <News 
          key={news.id}
          {...news} 
        />
      )
    })

    let isSignUp = false;

    return (
      <div>
        <Header />
        <Dropdown />
        <Main />
        {cfNews}
        <section className="cfFacts">
          {cfFacts}
        </section>
        {isSignUp && <Survey/>}
        <Footer />
      </div>
    );
  }
  
  export default MainPage;