import PhoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import OtherIcon from '@mui/icons-material/QuestionMark';

import { default as SkypeIcon } from "../icons/Skype";
import { default as WeChatIcon } from "../icons/WeChat";
import { default as WhatsAppIcon } from "../icons/WhatsApp";

const icons = [
  OtherIcon,
  EmailIcon,
  PhoneIcon,
  SkypeIcon,
  WeChatIcon,
  WhatsAppIcon,
  PublicIcon,
];

export function ContactTypeIcon({contact_type, ...props}) {
  const Icon = icons[ contact_type || 0 ] || icons[0];
  return <Icon fontSize="small" {...props} />
}