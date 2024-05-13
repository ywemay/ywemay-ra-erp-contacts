import { 
  Datagrid,
 } from "react-admin";
import { ContactField } from '../show'

export function Grid(props = {}) {
  return <Datagrid {...props}>
      <ContactField />
    </Datagrid>
}
