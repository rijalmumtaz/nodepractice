import "assets/scss/style.scss"
import LandingPage from "pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage/>} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
