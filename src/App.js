import "./App.css";
import Default from "./Components/Default/Default.js";
import Variant2 from "./Components/Variant2/Variant2.js";
import Layout2 from "./Components/Layout2/Layout2.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Default />}/>
          <Route  path='Variant2' element={<Variant2 />}/>
          <Route  path='/Layout2' element={<Layout2 />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
