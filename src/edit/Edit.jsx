import { Edit as RAEdit } from "react-admin";
import { Form } from "./Form";

export const transform = (data) => {
  const { id, ...rest} = data;
  return rest;
}

export function Edit(props = {}) {
  return <RAEdit transform={transform} {...props}><Form /></RAEdit>
}