import {DataComponent, HeadComponent, ButtonComponent } from "./Components";
export default function SignInForm() {
  return (
    <div className="login form">
      <HeadComponent></HeadComponent>
      <body>
        <DataComponent></DataComponent>
        <ButtonComponent type={"submit"} lable={"Cancel"}></ButtonComponent>
        <ButtonComponent type={"reset"} lable={"Submit"}></ButtonComponent>
      </body>
    </div>
  );
}
