import Navigation from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import Info from "./components/Info.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Section from "./components/Section.jsx";
import Faq from "./components/Faq.jsx";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <Info/>
      <Section/>
      <Testimonials/>
      <Faq/>
      <Footer />


    </div>
  );
}

export default App;
