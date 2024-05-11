import {
  SimpleForm,
  TextInput,
} from "react-admin";
import { getLabel } from "../utils/getLabel";

export function Form(props) {
  const {contactType } = props;
  const label = getLabel({contactType})
  return <SimpleForm {...props}>
    <TextInput
      label={label} 
      source="val" 
      />
  </SimpleForm>
}