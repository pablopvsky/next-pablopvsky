import { useInputValue } from "hooks/useInputValue";

export const useForm = ({ initialValues }) => {
  let result = {};

  for (const property in initialValues) {
    result = {
      ...result,
      [property]: useInputValue(initialValues[property]),
    };
  }

  return result;
};

export const useFormReset = (data) => {
  for (const property in data) {
    data[property].reset();
  }
};
