import { 
  InfiniteList as List,
  Datagrid,
  TextField,
  FunctionField
 } from "react-admin";
import { 
  EmbeddedListTitle as ListTitle,
} from 'ywemay-ra-erp'
import { Create } from "./Create";
import { ContactTypeIcon } from "../../show/ContactTypeIcon";

const Title = () => <ListTitle label='contacts.contacts' />

export function Empty() {
  return <div className="full-width">
    <Create />
  </div>
}

export function Grid() {

  return <>
    <Datagrid>
      <FunctionField
        label=""
        render={r => <ContactTypeIcon contact_type={r.contact_type} />}
        />
      <TextField
        label="contacts.contact"
        source="val"
        />
    </Datagrid>
    <Create />
  </>
}

export function EditList(props) {
  
  return <List
      title=" "
      actions={false}
      exporter={false}
      disableSyncWithLocation
      empty={<Empty />}
      {...props}
    >

      <Title />
      <Grid />
    </List>
}