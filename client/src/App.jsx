import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-10%", right: "0" }}></div>
      <div className="blur" style={{ top: "30%", left: "0" }}></div>
      <div className="blur" style={{ bottom: "5%", left: "0" }}></div>
      <div className="blur" style={{ bottom: "30%", right: "0" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
