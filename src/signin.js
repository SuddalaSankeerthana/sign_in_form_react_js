import { InputComponentContact, InputComponentSection } from "./components";
export default function SignInForm() {
  return (
    <div className="login form">
      <b>
        <h1>Sign-in user</h1>
      </b>
      <p>Please fill the below details.</p>
      <body>
        {" "}
        <InputComponentSection></InputComponentSection>
        <InputComponentContact></InputComponentContact>
        <button type="submit">Cancel</button>
        <button type="reset">Create user</button>
      </body>
    </div>
  );
}