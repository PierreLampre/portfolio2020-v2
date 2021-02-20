import './App.css';
import { useState } from "react"
import Backdrop from "./components/Backdrop/Backdrop"
import Navbar from "./components/Navbar/Navbar"
import Sidedrawer from "./components/SideDrawer/SideDrawer"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {

  const [sidedrawer, setSidedrawer] = useState(false);

  function drawerToggleClickHandler() {
    if (!sidedrawer) {
      setSidedrawer(true);
    } else {
      setSidedrawer(false);
    }
  }

  function backdropClickHandler() {
    setSidedrawer(false);
    console.log("clicked")
  }

  let backdrop;

  if (sidedrawer) {
    backdrop = <Backdrop click={() => backdropClickHandler()} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar drawerClickHandler={() => drawerToggleClickHandler()} />
        <Sidedrawer show={sidedrawer} bdclick={() => backdropClickHandler()} />
        {backdrop}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
