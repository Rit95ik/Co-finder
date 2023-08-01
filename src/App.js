import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import { Signup } from "./components/Signup.js";
import { Login } from "./components/Login.js";

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
