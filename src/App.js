import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
