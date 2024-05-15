import { Admin, Resource } from 'react-admin'
import { dataProvider, resources } from 'ywemay-ra-erp-data-provider-mock'
import { List } from '../list'
import { Create } from '../edit/Create'
import { Edit } from '../edit/Edit'

resources.more_contacts = [...resources.contacts]

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource name="contacts" 
      list={List} 
      create={Create}
      edit={Edit}
      />
  </Admin>
}