import NavBar from "./components/NavBar/Navbar";
import { Route,Routes } from "react-router-dom";
import Homepage from "./components/Pages/HomePage";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
    {/* NavBar */}
    <NavBar/>

    <Routes>
      <Route path="/" element={<Homepage/>} />
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
