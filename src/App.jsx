import "./App.css";
import HomePage from './pages/HomePage'
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App" >
        <div  style={{
          fontSize: "15px",
          padding: "15px",
          background: "#3cc3fc ",
          color: "white",
          textAlign: "left",
        }}>
          <Navbar>
          </Navbar>
      </div>
     

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element = {<AddBeerPage/>} />
        <Route path="/beers/:beerId" element = {<BeerDetailsPage/>} />

        {/* rutas para gestionar errores
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App;
