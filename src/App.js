import { Navbar } from "./myComponents/navbar/navbar";
import { Footer } from "./myComponents/footer/footer";
import { Social } from "./myComponents/footer/social";
import { Welcome } from "./myComponents/home/welcome";
import { Programs } from "./myComponents/home/programs";
import { ContactPart1 } from "./myComponents/contact/contactPart1";
import { ContactPart2 } from "./myComponents/contact/contactPart2";
import { ContactPart3 } from "./myComponents/contact/contactPart3";
import { AboutUs } from "./myComponents/campus/aboutUs";
import { CampusHeading } from "./myComponents/campus/campusHeading";
import { RecentPhotos } from "./myComponents/campus/recentPhotos";
import { WhyUsPart1 } from "./myComponents/whyUs/whyUsPart1";
import { WhyUsPart2 } from "./myComponents/whyUs/whyUsPart2";
import { WhyUsPart3 } from "./myComponents/whyUs/whyUsPart3";
import { Status } from "./myComponents/extra/status";
import { ScrollToTop } from "./myComponents/extra/scroll";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route exact path="/" element={
            <>
              <Navbar />
              <Welcome />
              <Programs />
              <Social />
              <Footer />
            </>
          }></Route>

          <Route exact path="/campus" element={
            <>
              <Navbar />
              <CampusHeading />
              <AboutUs />
              <RecentPhotos />
              <Social />
              <Footer />
            </>
          }></Route>

          <Route exact path="/why-us" element={
            <>
              <Navbar />
              <WhyUsPart1 />
              <WhyUsPart2 />
              <WhyUsPart3 />
              <Social />
              <Footer />
            </>
          }></Route>

          <Route exact path="/reach-us" element={
            <>
              <Navbar />
              <ContactPart1 />
              <ContactPart2 />
              <ContactPart3 />
              <Social />
              <Footer />
            </>
          }></Route>

          <Route path="*" element={<Status />}></Route>

        </Routes>
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
