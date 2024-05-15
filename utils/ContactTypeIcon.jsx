import {
  QuestionMark as Other,
  Email,
  Phone,
  Skype,
  WeChat,
  WhatsApp,
  Public
} from 'ywemay-ra-icons'

const icons = [
  Other,
  Email,
  Phone,
  Skype,
  WeChat,
  WhatsApp,
  Public,
];

export function ContactTypeIcon({contact_type, ...props}) {
  const Icon = icons[ contact_type || 0 ] || icons[0];
  return <Icon fontSize="small" {...props} />
}