import { Create as RACreate } from "react-admin";
import { Form } from "./Form";
import useRedirect from 'ywemay-ra-erp/hooks/useStateRedirect'

export function Create({form, ...props}) {
  const redirect = useRedirect()
  return <RACreate 
    redirect={redirect}
    {...props}><Form {...form} /></RACreate>
}