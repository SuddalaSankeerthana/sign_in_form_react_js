export const SignInForm=()=>{
    return (
        <div className="login form">
         <b><h1>Sign-in user</h1></b>
         <p>Please fill the below details.</p>
         <body> <InputComponentSection></InputComponentSection>
          <InputComponentContact></InputComponentContact>
          <button type="submit">Cancel</button>
          <button type="reset">Create user</button>
          </body>
        </div>
      );
}
export const InputComponent=({lable,placeholder})=>{
    return(<section>
        <div className="inputItem">
        <lable>{lable}</lable>
        <input type="text" placeholder={placeholder}></input></div></section>);
}
export const InputComponentSection=()=>{
    return(<section><div className="input"><InputComponent lable={"First Name"} placeholder={"Enter first name"}></InputComponent>
    <InputComponent lable={"Last Name"} placeholder={"Enter last name"}></InputComponent></div></section>)
}
export const InputComponentContact=()=>{
   return( <section><div className="input"><InputComponent lable={"Email id"} placeholder={"e.g john.smith@org.name"}></InputComponent>
          <InputComponent lable={"Phone Number"} placeholder={"+91r"}></InputComponent></div></section>)
}