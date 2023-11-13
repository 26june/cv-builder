import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/LoginPage";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import "./App.css";
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
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginPage />}
    </>
  );
}

export default App;
