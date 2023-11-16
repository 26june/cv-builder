import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/LoginPage";
import LogoutButton from "./components/LogoutButton";
import AboutButton from "./components/AboutButton";
import HomeButton from "./components/HomeButton";
import "./App.css";
import "./AppAnimations.css";
import CvBuilder from "./components/CvBuilder";

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
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginPage />}
    </>
  );
}

export default App;
