import { useAuth0 } from "@auth0/auth0-react";

function AboutButton() {
  const { About } = useAuth0();

  return (
    <button
      className="AboutButton"
      onClick={() =>
        About({ AboutParams: { returnTo: window.location.origin } })
      }
    >
      About
    </button>
  );
}

export default AboutButton;
