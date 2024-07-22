import "./index.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Cart from "./pages/Cart";
import Categorie from "./pages/Categorie";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="categories/:categoryId" element={<Categorie />} />
          <Route path="categories/:categoryId/:productId" element={<ProductPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Container maxWidth="xl">
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
