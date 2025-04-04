import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Order from "./Pages/Order.jsx";
import Addorder from './Pages/User Pages/Myorders.jsx';
import DItems from './Pages/User Pages/Items.jsx'
import Ucarts from './Pages/User Pages/mycart.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<Order/>} />
        <Route path="/uorder" element={<Addorder/>} />
        <Route path="/uitems" element={<DItems/>} />
        <Route path="/ucarts" element={<Ucarts/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
