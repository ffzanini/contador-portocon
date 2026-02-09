"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { WHATSAPP_MESSAGES, PROTOCON } from "@/constants/protocon";

export function PeopleFocusedSection() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isSobre = pathname === "/sobre";

  const firstCard = isSobre
    ? {
        href: "/escritorio",
        title: "Nosso Escritório",
        alt: "Nosso Escritório",
        description:
          "Um espaço físico pronto para receber você sempre que precisar.",
        imageSrc: "/images/hero/hero-2.jpg",
        whatsappMessage: undefined,
      }
    : {
        href: "/sobre",
        title: "Sobre a Protocon",
        alt: "Sobre a Protocon",
        description:
          "Conheça a Protocon, um escritório de contabilidade especializado em descomplicar a sua vida.",
        imageSrc: "/images/hero/hero-1.jpg",
        whatsappMessage: isHome ? WHATSAPP_MESSAGES.sobre : undefined,
      };

  const middleCard = isHome
    ? {
        href: "/escritorio",
        title: "Nosso Escritório",
        alt: "Nosso Escritório",
        description:
          "Um espaço físico pronto para receber você sempre que precisar.",
        whatsappMessage: WHATSAPP_MESSAGES.escritorio,
      }
    : {
        href: "/abrir-empresa",
        title: "Abrir Empresa",
        alt: "Abrir Empresa",
        description: "Abra sua empresa em apenas 3 passos com a Protocon.",
        whatsappMessage: WHATSAPP_MESSAGES.abrirEmpresa,
      };

  const CardWrapper = ({
    href,
    whatsappMessage,
    children,
  }: {
    href: string;
    whatsappMessage?: string;
    children: React.ReactNode;
  }) => {
    if (isHome && whatsappMessage) {
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${PROTOCON.contact.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;
      return (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className="group">
        {children}
      </Link>
    );
  };

  return (
    <Section>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Uma estrutura 100% focada nas pessoas.
            </h2>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-normal text-gray-900 md:text-2xl">
              Uma contabilidade completa para te atender, seja online ou
              presencial.
            </h3>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <CardWrapper
            href={firstCard.href}
            whatsappMessage={firstCard.whatsappMessage}
          >
            <div className="relative mb-4 aspect-4/3 w-full overflow-hidden rounded-xl">
              <Image
                src={firstCard.imageSrc}
                alt={firstCard.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {firstCard.title}
                </h3>
              </div>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              {firstCard.title}
            </h4>
            <p className="text-gray-600">{firstCard.description}</p>
          </CardWrapper>

          <CardWrapper
            href={middleCard.href}
            whatsappMessage={isHome ? middleCard.whatsappMessage : undefined}
          >
            <div className="relative mb-4 aspect-4/3 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/hero/hero-2.jpg"
                alt={middleCard.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {middleCard.title}
                </h3>
              </div>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              {middleCard.title}
            </h4>
            <p className="text-gray-600">{middleCard.description}</p>
          </CardWrapper>

          <CardWrapper
            href="/mudar-de-contador"
            whatsappMessage={
              isHome ? WHATSAPP_MESSAGES.mudeDeContador : undefined
            }
          >
            <div className="relative mb-4 aspect-4/3 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/hero/hero-3.jpg"
                alt="Mudar de Contador"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Mudar de Contador
                </h3>
              </div>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-gray-900">
              Mudar de Contador
            </h4>
            <p className="text-gray-600">
              Mudar de contabilidade nunca foi tão simples.
            </p>
          </CardWrapper>
        </div>
      </div>
    </Section>
  );
}
