import {
  TextField,
  useRecordContext,
  EmailField,
  WrapperField,
  UrlField,
} from 'react-admin'
import contactLabels from "../utils/labels";
import { ContactTypeIcon } from "./ContactTypeIcon";

export function ContactField(props) {
  const record = useRecordContext();
  const labelId = record.contact_type || 0;
  const fieldProps = {
    label: contactLabels[labelId > contactLabels.length - 1 ? 0 : labelId ],
    source: 'val'
  }

  return <WrapperField label="contacts.contact" sortBy="val">
  <span className="small-icon-wrapper"><ContactTypeIcon contact_type={labelId} /></span>
  { labelId === 1 && <EmailField {...fieldProps} {...props} /> }
  { labelId === 2 && <UrlField {...fieldProps} {...props} /> }
  { (labelId === 0 || labelId > 2) && <TextField {...fieldProps} {...props} /> }
  </WrapperField>
}

ContactField.defaultProps = { label: "contacts.contacts" }