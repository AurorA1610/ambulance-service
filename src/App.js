import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Services/Services/Services";
import AmbulanceBooking from './Pages/AmbulanceBooking/AmbulanceBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ambulance" element={<AmbulanceBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
