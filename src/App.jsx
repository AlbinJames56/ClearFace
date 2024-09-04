import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import LoadingPage from "./Components/LoadingPage";
import ResultPage from "./Pages/ResultPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path='/result' element={<ResultPage/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
