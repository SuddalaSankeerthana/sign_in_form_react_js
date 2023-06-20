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
export const HeadComponent = () => {
  return (
    <>
      <b>
        <h1>Sign-in user</h1>
      </b>
      <p>Please fill the below details.</p>
    </>
  );
};
export const ButtonComponent = ({ type, lable }) => {
  return <button type={type}>{lable}</button>;
};
export const DataComponent = () => {
  return (
    <>
      <tr>
        <td>
          <InputComponent
            lable={"First Name"}
            placeholder={"Enter first name"}
          ></InputComponent>
        </td>
        <td>
          <InputComponent
            lable={"Last Name"}
            placeholder={"Enter last name"}
          ></InputComponent>
        </td>
      </tr>
      <tr>
        <td>
          <InputComponent
            lable={"Email Id"}
            placeholder={"e.g john.smith@org.name"}
          ></InputComponent>
        </td>
        <td>
          <InputComponent
            lable={"Phone Number"}
            placeholder={"+91"}
          ></InputComponent>
        </td>
      </tr>
    </>
  );
};
