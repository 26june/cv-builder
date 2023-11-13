import { useAuth0 } from "@auth0/auth0-react";

function HomeButton() {
  const { Home } = useAuth0();

  return (
    <button
      className="HomeButton"
      onClick={() =>
        About({ HomeParams: { returnTo: window.location.origin } })
      }
    >
      Home
    </button>
  );
}

export default HomeButton;
