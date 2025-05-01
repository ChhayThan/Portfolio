import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/loadingScreen/LoadingScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileMenu } from "./components/mobileMenu/MobileMenu";
import { Home } from "./components/sections/Home/Home";
import { About } from "./components/sections/About/About";
import { Project } from "./components/sections/Project/Project";
import { Contact } from "./components/sections/Contact/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`mainContainer ${isLoaded ? "" : "hidden"}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
