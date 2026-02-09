"use client";

import { RiWhatsappLine } from "react-icons/ri";
import { PROTOCON, WHATSAPP_MESSAGES } from "@/constants/protocon";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/cn";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "button" | "link";
  message?: string;
}

export function WhatsAppButton({
  className,
  variant = "button",
  message,
}: WhatsAppButtonProps) {
  const pathname = usePathname();

  const getMessage = () => {
    if (message) return message;
    if (pathname === "/abrir-empresa") return WHATSAPP_MESSAGES.abrirEmpresa;
    if (pathname === "/mudar-de-contador")
      return WHATSAPP_MESSAGES.mudeDeContador;
    if (pathname === "/sobre") return WHATSAPP_MESSAGES.sobre;
    return WHATSAPP_MESSAGES.home;
  };

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${PROTOCON.contact.whatsapp}&text=${encodeURIComponent(getMessage())}`;

  if (variant === "link") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("inline-flex items-center gap-2", className)}
      >
        <RiWhatsappLine className="h-5 w-5" />
        <span>Fale com um de nossos especialistas</span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[#20BA5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
        className,
      )}
    >
      <RiWhatsappLine className="h-5 w-5" />
      <span>Fale com um de nossos especialistas</span>
    </a>
  );
}
