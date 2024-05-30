import "./App.css";
import Default from "./Components/Default/Default.js";
import Variant2 from "./Components/Variant2/Variant2.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='Default' element={<Default />}/>
          <Route  path='Variant2' element={<Variant2 />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
