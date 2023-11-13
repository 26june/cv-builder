import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/LoginPage";
import LogoutButton from "./components/LogoutButton";
import AboutButton from "./components/AboutButton";
import HomeButton from "./components/HomeButton";

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

<BrowserRouter>
      <header>
      {isAuthenticated && (
        <><div className="Home">
          {/* <Profile></Profile> */}
          <CvBuilder></CvBuilder>
          <HomeButton />
          <AboutButton />
          <LogoutButton />
        </div>

              <Link to="/"> Home</Link>
              <Link to="/about"> About</Link>
              <Link to="/Profile"> Profile</Link>
      </header>

            <Routes>
              {/* <Route path="/" element={<Home books={books} setBooks={setBooks} />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/book/:id" element={<Book />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
      )}
      {!isAuthenticated && <LoginPage />}
    </>
  );
}

export default App;
