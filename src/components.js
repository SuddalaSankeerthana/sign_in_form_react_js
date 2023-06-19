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
export const HeadComponent=()=>{
  return(<>
  <b>
  <h1>Sign-in user</h1>
  </b>
  <p>Please fill the below details.</p>
    </>)
}
export const ButtonComponent=({type,lable})=>{
return(<button type={type}>{lable}</button>)
}