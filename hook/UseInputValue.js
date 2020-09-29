import { useState } from "react";

export const UseInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const reset = () => setValue("");
  const validate = setError;

  return { value, onChange, error, reset, validate };
};
