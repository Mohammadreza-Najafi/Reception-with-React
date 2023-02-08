import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
//pages
import Home from "./pages/Home.jsx"
import About from "./pages/Home.jsx"
import Error from "./pages/Home.jsx"
import SingleReception from "./pages/SingleReception.jsx"
//component
import Navbar from "./component/Navbar.jsx"

function App() {

  return (
      <Router>
        <Navbar>
          <Routes>
            <Route exact path="/">
              {<Home/>}
            </Route>
            <Route path="/about">
              {<About/>}
            </Route>
            <Route path="/reception/:id">
              {<SingleReception/>}
            </Route>
            <Route path="*">
              {<Error/>}
            </Route>
          </Routes>
        </Navbar>

      </Router>
  )

}

export default App
