import React, { useState } from "react";
import useInput from "../hooks/useInput";

function UserFormCustom() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindlastName, resetlastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName} `);
    resetFirstName();
    resetlastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name Custom</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Last Name Custom</label>
          <input {...bindlastName} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserFormCustom;
