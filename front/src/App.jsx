import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "45%", left: "0rem" }}></div>
      <div className="blur" style={{ top: "5%", left: "24rem" }}></div>
      <div className="blur" style={{ top: "60%", left: "82rem" }}></div>
      <Home />
      {/* <Profile /> */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
