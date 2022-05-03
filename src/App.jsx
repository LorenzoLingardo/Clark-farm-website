import React from "react";
import "./scss/global.scss";
import { Route, Routes } from "react-router";

import MainPage from "./components/mainpage/MainPage";
import Event from "./components/eventspage/Event";
import Events from "./components/eventspage/Events";
import Education from "./components/educationpage/Education";
import Volunteer from "./components/volunteerpage/Volunteer";
import AboutUs from "./components/aboutuspage/AboutUs";
import Links from "./components/linkspage/Links"
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import EducationOps from "./components/educationpage/EducationOps";
import { Paths } from "./utils/Paths";
import CovidBanner from "./components/mainpage/COVIDBanner";
import AdminEvent from "./components/admin/AdminEvent";
import AdminEvents from "./components/admin/AdminEvents";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  var title = document.querySelector("title");
  title.innerText = "Clark Historic Farm";

  return (
    <>
      <CovidBanner />
      <Header />
      <main>
        <Routes>
          <Route exact path={Paths.home} element={<MainPage />} />
          <Route exact path={Paths.events} element={<Events />} />
          <Route path={Paths.eventID} element={<Event />} />
          <Route exact path={Paths.education} element={<EducationOps />} />
          <Route path={Paths.educationID} element={<Education />} />
          <Route exact path={Paths.volunteer} element={<Volunteer />}/>
          <Route exact path={Paths.aboutUs} element={<AboutUs />}/>
          <Route exact path={Paths.links} element={<Links />} />
          <Route exact path={Paths.admin} element={<AdminDashboard />} />
          <Route exact path={Paths.adminEvents} element={<AdminEvents/>} />
          <Route exact path={Paths.adminEvent} element={<AdminEvent/>}/>
          {/* <Route exact path={Paths.adminEducation} element={<AdminEducation/>}/>
          <Route exact path={Paths.adminVolunteer} element={<AdminVolunteer/>}/>
          <Route exact path={Paths.adminAboutUs} element={<AdminAboutUs/>}/>
          <Route exact path={Paths.adminHome} element={<AdminHome/>}/> */}
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
