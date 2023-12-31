import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogOutButton from "./components/LogoutButton";
import AboutButton from "./components/AboutButton";
import HomeButton from "./components/HomeButton";

import Profile from "./components/Profile";
import "./App.css";
import About from "./About";
import CvBuilder from "./components/CvBuilder";
import { LinearProgress } from "@mui/material";
import CVTemplates from "./templates/CVTemplates";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <div className="Home">
          <header>
            <nav>
              {isAuthenticated ? <LogOutButton /> : <LoginPage />}
              <Link to="/"> Home</Link>
              <Link to="/about"> About</Link>
            </nav>
            <img src="/images/CVlogo.png" alt="forge logo" id="logo" />
          </header>

          <Routes>
            <Route path="/" element={<CvBuilder></CvBuilder>} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/cv-templates" element={<CVTemplates />} /> */}
          </Routes>
        </div>
      )}
      {!isAuthenticated && <LoginPage />}
    </BrowserRouter>
  );
}

export default App;
