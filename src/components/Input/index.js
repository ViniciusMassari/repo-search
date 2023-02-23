import React from "react";
import { InputContainer } from "./styles";

const Input = ({value, onChange}) => {
  return (
    <InputContainer>
      <input placeholder="username/reponame" type="text" value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default Input;
