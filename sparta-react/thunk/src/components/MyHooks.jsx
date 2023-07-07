import React, { useState } from "react";
import useInput from "../hooks/useInput";

function MyHooks() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // const onChangeNameHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const onChangePasswordHandler = (event) => {
  //   setPassword(event.target.value);
  // };

  const [name, onChangeNameHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input
        type="password"
        value={password}
        onChange={onChangePasswordHandler}
      />
    </div>
  );
}

export default MyHooks;
