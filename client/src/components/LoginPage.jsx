import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="LoginPage">
      <img src="/images/CVlogo.png" alt="forge logo" id="logo" />
      <h1> Welcome to CVFORGE.COM </h1>
      <p>
        where you can design your own CV ready to apply for jobs. You will enter
        some details of your education, experience in and out of the work place
        and some personal details about youself to fill in your profile. At the
        end of the form you will this website will generate a choice of
        templates for you to choose from for you CV.
      </p>
      <h2>Login to Start Building your CV!</h2>

      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
}

export default LoginPage;
