import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="LoginPage">
      <h1>Welcome to CV Builder!</h1>
      <h2>Login to Start Building your CV!</h2>

      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
}

export default LoginPage;
