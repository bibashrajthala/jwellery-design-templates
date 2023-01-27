// import logo from "./logo.svg";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Collections from "./pages/Collections";
// import ProductDetails from "./pages/ProductDetails";
// import Contact from "./pages/Contact";
// import Carousel from "./pages/Carousel";

import UserProfile from "./pages/UserProfile";
import AgentProfile from "./pages/AgentProfile";
import SimDashboard from "./pages/SimDashboard";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Products /> */}
      {/* <Collections /> */}
      {/* <ProductDetails /> */}
      {/* <Contact /> */}
      {/* <Carousel /> */}
      <UserProfile />
      <AgentProfile />
      <SimDashboard />
    </div>
  );
}

export default App;
