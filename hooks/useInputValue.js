import { useState } from "react";

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [touch, setTouch] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value), setTouch(true);
  };
  const reset = () => setValue("");
  const validate = setError;

  return { value, error, touch, onChange, reset, validate, setTouch };
};
