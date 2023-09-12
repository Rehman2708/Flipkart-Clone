import Categories from "./pages/Categories/Categories";
import Header from "./pages/Header/Header";
import Products from "./pages/Products/products";
import "./App.scss";
import Footer from "./pages/Footer/Footer";
function App() {
  return (
    <div className="mainDiv">
      <div className="App">
        <Header />
        <Categories />
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
