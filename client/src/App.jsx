import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/LoginPage";
import LogoutButton from "./components/LogoutButton";
import AboutButton from "./components/AboutButton";
import HomeButton from "./components/HomeButton";

import Profile from "./components/Profile";
import "./App.css";
import CvBuilder from "./components/CvBuilder";
import { LinearProgress } from "@mui/material";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div className="Home">
          {/* <Profile></Profile> */}
          <CvBuilder></CvBuilder>
          <HomeButton />
          <AboutButton />

          <LinearProgress variant="determinate" value={100} />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginPage />}
    </>
  );
}

export default App;
