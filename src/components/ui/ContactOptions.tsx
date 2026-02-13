"use client";

import { RiWhatsappLine, RiMailLine } from "react-icons/ri";
import { PORTOCON, WHATSAPP_MESSAGES } from "@/constants/portocon";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/cn";

interface ContactOptionsProps {
  className?: string;
  whatsappMessage?: string;
  emailSubject?: string;
  variant?: "horizontal" | "vertical";
}

export function ContactOptions({
  className,
  whatsappMessage,
  emailSubject,
  variant = "horizontal",
}: ContactOptionsProps) {
  const pathname = usePathname();

  const getWhatsAppMessage = () => {
    if (whatsappMessage) return whatsappMessage;
    if (pathname === "/abrir-empresa") return WHATSAPP_MESSAGES.abrirEmpresa;
    if (pathname === "/mudar-de-contador")
      return WHATSAPP_MESSAGES.mudeDeContador;
    if (pathname === "/servicos-prestados") return WHATSAPP_MESSAGES.servicos;
    return WHATSAPP_MESSAGES.home;
  };

  const getEmailSubject = () => {
    if (emailSubject) return emailSubject;
    if (pathname === "/abrir-empresa") return "Abrir Empresa";
    if (pathname === "/mudar-de-contador") return "Trocar de Contador";
    return "Contato - Site Portocon";
  };

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${PORTOCON.contact.whatsapp}&text=${encodeURIComponent(getWhatsAppMessage())}`;
  const emailUrl = `mailto:${PORTOCON.contact.email}?subject=${encodeURIComponent(getEmailSubject())}`;

  const containerClass = cn(
    "flex gap-4",
    variant === "vertical" ? "flex-col" : "flex-row flex-wrap",
    className
  );

  return (
    <div className={containerClass}>
      <a
        href={emailUrl}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <RiMailLine className="h-5 w-5" />
        <span>Envie um e-mail</span>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[#20BA5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <RiWhatsappLine className="h-5 w-5" />
        <span>Mande um WhatsApp</span>
      </a>
    </div>
  );
}
