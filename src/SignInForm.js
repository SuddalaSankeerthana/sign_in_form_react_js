import {InputComponent,HeadComponent,ButtonComponent} from "./Components";
export default function SignInForm() {
  return (
    <div className="login form">
      <HeadComponent></HeadComponent>
      <body>
      <InputComponent
          lable={"First Name"}
          placeholder={"Enter first name"}
        ></InputComponent>
        <InputComponent
          lable={"Last Name"}
          placeholder={"Enter last name"}
        ></InputComponent>
         <InputComponent
          lable={"Email Id"}
          placeholder={"e.g john.smith@org.name"}
        ></InputComponent>
        <InputComponent
          lable={"Phone Number"}
          placeholder={"+91"}
        ></InputComponent>
        <ButtonComponent type={"submit"} lable={"Cancel"}></ButtonComponent>
        <ButtonComponent type={"reset"} lable={"Submit"}></ButtonComponent>
      </body>
    </div>
  );
}