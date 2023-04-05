import "assets/scss/style.scss";
import { ToastContainer } from "react-toastify";

import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import NotFound from "pages/404";

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
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <ToastContainer></ToastContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
