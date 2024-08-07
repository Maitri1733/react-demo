import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName}-{name.lastName}
      <form>
        <h1>Form</h1>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
          placeholder="First Name"
        ></input>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
          placeholder="Last Name"
        ></input>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
      </form>
    </div>
  );
}
