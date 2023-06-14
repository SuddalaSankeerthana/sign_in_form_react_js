export const InputComponent = ({ lable, placeholder }) => {
  return (
    <section>
      <div className="inputItem">
        <lable>{lable}</lable>
        <input type="text" placeholder={placeholder}></input>
      </div>
    </section>
  );
};
export const InputComponentSection = () => {
  return (
    <section>
      <div className="input">
        <InputComponent
          lable={"First Name"}
          placeholder={"Enter first name"}
        ></InputComponent>
        <InputComponent
          lable={"Last Name"}
          placeholder={"Enter last name"}
        ></InputComponent>
      </div>
    </section>
  );
};
export const InputComponentContact = () => {
  return (
    <section>
      <div className="input">
        <InputComponent
          lable={"Email id"}
          placeholder={"e.g john.smith@org.name"}
        ></InputComponent>
        <InputComponent
          lable={"Phone Number"}
          placeholder={"+91"}
        ></InputComponent>
      </div>
    </section>
  );
};
