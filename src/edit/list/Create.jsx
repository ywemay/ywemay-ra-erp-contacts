import { useState } from "react";
import { Create as RACreate, useNotify, useListContext } from "react-admin";
import { EditForm } from "./Form";
import { IconButton } from '@mui/material';
import { ContactTypeIcon } from "../../show/ContactTypeIcon";

export function CreateWrapper({ children, setContactType, show, setShow }) {

  const handleShowCreate = (contact_type) => {
    setContactType(contact_type);
    setShow(true);
  }

  const contactTypes = [1, 2, 3, 4, 5, 6];

  return show
    ? <>{children}</>
    : <div className="flex justify-end p-3">
      {/* <div>{t('ra.action.create')}</div> */}
      {contactTypes.map(i => <IconButton 
        color="primary"
        key={'contact-type-button-' + i}
        variant="text" onClick={() => handleShowCreate(i)}>
          <ContactTypeIcon contact_type={i} />
        </IconButton>)}
    </div>
}

export function Create(props) {
  
  const notify = useNotify();
  const [ contactType, setContactType ] = useState(1);
  const [ show, setShow ] = useState(false);
  
  const { filter, refetch } = useListContext();
  
  const transform = (data) => {
    return {...data, ...filter, contact_type: contactType }
  }

  const onSuccess = (_data) => {
    notify(`ra.notification.created`);
    setShow(false)
    refetch();
  };

  const onClose = () => setShow(false);

  const more = { setContactType, show, setShow }

  return <CreateWrapper {...more} >
    <RACreate
      mutationOptions={{ onSuccess }}
      transform={transform}
      >
      <div className="flex flex-row gap-2">
      <EditForm 
        onClose={onClose}
        contactType={contactType}
        />
        </div>
    </RACreate>
  </CreateWrapper>
}