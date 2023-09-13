import Categories from "./pages/Home/Categories/Categories";
import Header from "./pages/Header/Header";
import Products from "./pages/Home/Products/products";
import "./App.scss";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detail/Detailpage";
import { AppRoutes } from "./routes/AppRoutes";
function App() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />;
  //     break;
  //   case "/detail":
  //     component = <Detailpage />;
  //     break;
  // }
  return (
    <div className="mainDiv">
      <div className="App">
        <Header />
        {/* {component} */}
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
