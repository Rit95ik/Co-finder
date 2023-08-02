import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import { Signup } from "./components/Signup.js";
import { Login } from "./components/Login.js";
import Info from "./components/Info.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Section from "./components/Section.jsx";
import Faq from "./components/Faq.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Content />
              
              <Info />
              <Section />
              <Testimonials />
              <Faq />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
