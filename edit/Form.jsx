import { SimpleForm } from "react-admin";
import ContactTypeInput from "../inputs/ContactType";
import ValInput from "../inputs/Val";

export function Form(props) {
  return <SimpleForm {...props}>
    <ContactTypeInput />
    <ValInput />
  </SimpleForm>
}