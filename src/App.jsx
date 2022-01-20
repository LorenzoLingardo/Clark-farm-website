import React from 'react'
import MainPage from './components/mainpage/MainPage';

function App() {

  return (
    <div>
      {/* <Routes>
            <Route exact path="/" element={<MainPage />}/>
            <Route exact path="/footer" element={<Footer />}/>
            <Route exact path="/main" element={<Main />}/>
            <Route exact path="/dropdown" element={<Dropdown />}/>
          </Routes> */}
      <MainPage />
    </div>
  );
}

export default App;