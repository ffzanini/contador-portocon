import {
  RiLinkedinLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";
import { PROTOCON } from "./protocon";

export const socials = [
  {
    icon: RiInstagramLine,
    href: PROTOCON.socials.instagram,
    name: "Instagram",
  },
  {
    icon: RiLinkedinLine,
    href: PROTOCON.socials.linkedin,
    name: "LinkedIn",
  },
  {
    icon: RiWhatsappLine,
    href: `https://api.whatsapp.com/send/?phone=${PROTOCON.contact.whatsapp}&text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Protocon Contabilidade.")}`,
    name: "WhatsApp",
  },
  {
    icon: RiMailLine,
    href: `mailto:${PROTOCON.contact.email}`,
    name: "Email",
  },
];
