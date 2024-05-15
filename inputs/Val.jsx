import { TextInput, required, email } from "react-admin";
import { getLabel } from "../utils/getLabel";

export default function ValInput(props) {

   const validate = [
    required(),
  ];

  return <TextInput
    label="value.value"
    source="val"
    validate={validate}
    {...props} />
}