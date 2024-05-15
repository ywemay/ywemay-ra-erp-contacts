import { 
  Datagrid,
 } from "react-admin";
import ContactField from '../fields/Contact'

export function Grid(props = {}) {
  return <Datagrid rowClick="edit" {...props}>
      <ContactField />
    </Datagrid>
}
