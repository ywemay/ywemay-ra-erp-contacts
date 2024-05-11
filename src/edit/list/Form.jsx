import {
  Create,
  Edit,
  TextInput,
  SimpleForm,
  useNotify,
  Toolbar,
  SaveButton,
  useTranslate,
  email,
  required,
  useListContext,
} from "react-admin";
import { Button, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ContactTypeIcon } from "../../show/ContactTypeIcon";

export function FormToolbar({ onClose, ...props }) {
  const t = useTranslate();
  return <Toolbar {...props}>
    <SaveButton />
    <Button
      startIcon={<CloseIcon />}
      variant="outlined"
      onClick={() => { if (typeof onClose === 'function') onClose()}}
      >{t("ra.action.close")}</Button>
  </Toolbar>
}

export function CreateItemDeprecated({onCreated, onClose, contactType}) {

  const notify = useNotify();
  const { filterValues } = useListContext();
  const transform = (data) => {
    return {...data, ...filterValues, contact_type: contactType }
  }

  const onSuccess = (data) => {
    notify(`ra.notification.created`);
    onCreated(data.id);
  };

  return <Create
    mutationOptions={{ onSuccess }}
    transform={transform}
    >
    <EditForm 
      onClose={onClose} 
      contactType={contactType}
      />
  </Create>
}

export function EditItem() {
  return <Edit>
    <EditForm />
  </Edit>
}

export function EditForm({ onClose, contactType, ...props }) {
  
  const validate = [
    required(),
    contactType === 1 ? email() : undefined,
  ];
  
  return <SimpleForm toolbar={<FormToolbar onClose={onClose} />} {...props}>
    <ContactTypeIcon contact_type={contactType} />
    <TextInput
      label="contacts.contact"
      startIcon={<ContactTypeIcon contact_type={contactType} />}
      startAdornment={
          <InputAdornment position="start">
            <ContactTypeIcon contact_type={contactType} />
          </InputAdornment>
        }
      source="val"
      validate={validate}
      />
  </SimpleForm>
}