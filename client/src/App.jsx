import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/LoginPage";
import LogoutButton from "./components/LogoutButton";
import AboutButton from "./components/AboutButton";
import HomeButton from "./components/HomeButton";

import Profile from "./components/Profile";
import "./App.css";
import "./Template1.css";
import "./Template2.css";
import "./Template3.css";
import CvBuilder from "./components/CvBuilder";
import CVTemplates from "./templates/CVTemplates";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableList from "./DraggableList";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>traTemp-Branch</h1>
      <h2>Template Examples</h2>
      <div className="app">
        <DndProvider backend={HTML5Backend}>
          <CVTemplates />
        </DndProvider>
      </div>
    </>
  );
}
export default App;
