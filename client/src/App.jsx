import * as React from "react";

import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Settings from "./pages/Settings/Settings";
import { IntlProvider } from "react-intl";
import French from "./lang/fr-FR.json";
import English from "./lang/en-US.json";

const messages = {
  fr: French,
  "fr-FR": French,
  en: English,
};

function App() {
  const [local, setLocal] = React.useState(navigator.language);

  const onLanguageChange = (lang) => {
    setLocal(lang);
  };

  const user = useSelector((state) => state.authReducer.authData);
  return (
    <IntlProvider locale={local} messages={messages[local]} key={local}>
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
          <Route
            path="/settings"
            element={
              user ? (
                <Settings onLanguageChange={onLanguageChange} />
              ) : (
                <Navigate to="/settings" />
              )
            }
          ></Route>
        </Routes>
      </div>
    </IntlProvider>
  );
}

export default App;
