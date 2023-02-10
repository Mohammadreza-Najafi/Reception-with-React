import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
//pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Error from "./pages/Error.jsx"
import SingleReception from "./pages/SingleReception.jsx"
//component
import Navbar from "./component/Navbar.jsx"

function App() {

  return (
      <Router>
          <Navbar/>
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/reception/:id" element={<SingleReception/>} />
            <Route path="*" element={<Error/>} />

          </Routes>
      </Router>
  )

}

export default App
