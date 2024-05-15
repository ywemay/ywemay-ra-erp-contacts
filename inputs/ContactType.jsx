import { required, SelectInput } from "react-admin";
import labels from "../utils/labels";

const choices = labels.map((v, i) => {return {id: i, name: v}})

export default function ContactTypeInput(props) {
  return <SelectInput
    label="contacts.type"
    choices={choices}
    source="contact_type"
    validate={[required()]}
    defaultValue={1}
    {...props}
    />
}