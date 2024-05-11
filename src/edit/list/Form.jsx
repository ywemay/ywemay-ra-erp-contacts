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

export function FormToolbar({ onClose }) {
  const t = useTranslate();
  return <Toolbar className="gap-2">
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

export function EditForm({ onClose, contactType }) {
  
  const validate = [
    required(),
    contactType === 1 ? email() : undefined,
  ];
  
  return <SimpleForm toolbar={<FormToolbar onClose={onClose} />}>
    <div className="md:flex md:flex-row gap-2 justify-evenly">
      <ContactTypeIcon className="m-3" contact_type={contactType} />
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
    </div>
  </SimpleForm>
}