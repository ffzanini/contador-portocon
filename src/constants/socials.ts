import {
  RiLinkedinLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";
import { PORTOCON } from "./portocon";

export const socials = [
  {
    icon: RiInstagramLine,
    href: PORTOCON.socials.instagram,
    name: "Instagram",
  },
  {
    icon: RiLinkedinLine,
    href: PORTOCON.socials.linkedin,
    name: "LinkedIn",
  },
  {
    icon: RiWhatsappLine,
    href: `https://api.whatsapp.com/send/?phone=${PORTOCON.contact.whatsapp}&text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Portocon Contabilidade.")}`,
    name: "WhatsApp",
  },
  {
    icon: RiMailLine,
    href: `mailto:${PORTOCON.contact.email}`,
    name: "Email",
  },
];
