import "assets/scss/style.scss";

import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/properties/:id"
            element={<DetailsPage />}
          />
          <Route
            path="/example"
            element={<Example />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
