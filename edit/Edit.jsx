import { Edit as RAEdit } from "react-admin";
import { Form } from "./Form";
import useRedirect from 'ywemay-ra-erp/hooks/useStateRedirect'

export const transform = (data) => {
  const { id, ...rest} = data;
  return rest;
}

export function Edit({form, ...props}) {
  const redirect = useRedirect()
  return <RAEdit 
    transform={transform} 
    redirect={redirect}
    {...props}><Form {...form} /></RAEdit>
}