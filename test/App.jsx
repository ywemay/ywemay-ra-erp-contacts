import { Admin, Resource } from 'react-admin'
import { dataProvider, resources } from 'ywemay-ra-erp-data-provider-mock'
import { List, Edit, EditList } from '../'

resources.more_contacts = [...resources.contacts]

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource name="contacts" 
      list={<List grid={{rowClick: 'edit'}} />}
      edit={Edit} />
    <Resource name="more_contacts"
      options={{label: 'Embedded Contacts'}}
      list={EditList} />
  </Admin>
}