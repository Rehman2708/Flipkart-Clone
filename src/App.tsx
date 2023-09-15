import Header from "./pages/Header/Header";
import "./App.scss";
import Footer from "./pages/Footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";
function App() {
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
