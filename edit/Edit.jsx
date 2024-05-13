import { Edit as RAEdit } from "react-admin";
import { Form } from "./Form";
import { resource } from '../resource';

export const transform = (data) => {
  const { id, ...rest} = data;
  return rest;
}

export function Edit(props = {}) {
  return <RAEdit 
    transform={transform} 
    resource={resource}
    {...props}><Form /></RAEdit>
}