import { Create as RACreate } from "react-admin";
import { Form } from "./Form";

export function Create({form, ...props}) {
  return <RACreate 
    {...props}><Form {...form} /></RACreate>
}