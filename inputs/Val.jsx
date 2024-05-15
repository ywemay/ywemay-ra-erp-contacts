import { TextInput, required, email } from "react-admin";
import { useWatch } from "react-hook-form";
import { getLabel } from "../utils/getLabel";

export default function ValInput(props) {
  const contactType = useWatch({ name: "contact_type" });
  const label = getLabel({contactType})

   const validate = [
    required(),
    contactType === 1 ? email() : undefined,
  ];

  return <TextInput
    label={label}
    source="val"
    validate={validate}
    {...props} />
}