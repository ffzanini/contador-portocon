"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { HERO_TEXTS, WHATSAPP_MESSAGES } from "@/constants/portocon";

type HeroVariant =
  | "home"
  | "abrirEmpresa"
  | "mudeDeContador"
  | "sobre"
  | "escritorio"
  | "plataforma";

function pathnameToVariant(pathname: string | null): HeroVariant {
  if (pathname === "/") return "home";
  if (pathname === "/abrir-empresa") return "abrirEmpresa";
  if (pathname === "/mudar-de-contador") return "mudeDeContador";
  if (pathname === "/sobre") return "sobre";
  if (pathname === "/escritorio") return "escritorio";
  if (pathname === "/plataforma") return "plataforma";
  return "home";
}

interface HeroProps {
  variant?: HeroVariant;
}

export function Hero({ variant: variantProp }: HeroProps = {}) {
  const pathname = usePathname();
  const variant = variantProp ?? pathnameToVariant(pathname);

  if (variant === "home") {
    return (
      <section className="relative min-h-[80vh] overflow-hidden bg-primary-50 md:min-h-0 md:py-16 lg:py-20">
        <div className="container-padding mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 pt-12 md:pt-0">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-5xl">
              {HERO_TEXTS.home.title}
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              {HERO_TEXTS.home.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/abrir-empresa">Abrir empresa</CTAButton>
              <CTAButton href="/mudar-de-contador" variant="secondary">
                Mudar de contador
              </CTAButton>
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Atendimento humanizado Portocon Contabilidade e Assessoria LTDA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
            <div
              className="absolute -right-16 -top-8 h-[200px] w-[200px] rounded-full bg-primary-600/25 mix-blend-multiply md:h-[380px] md:w-[380px]"
              aria-hidden
            />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "abrirEmpresa") {
    return (
      <section className="relative min-h-[80vh] overflow-hidden bg-primary-50 md:min-h-0 md:py-16 lg:py-20">
        <div className="container-padding mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-4/3 overflow-hidden rounded-2xl lg:order-1 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Abrir empresa com Portocon Contabilidade e Assessoria LTDA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
            <div
              className="absolute -bottom-16 -left-8 h-[200px] w-[200px] rounded-full bg-secondary-600/25 mix-blend-multiply md:h-[380px] md:w-[380px]"
              aria-hidden
            />
          </div>

          <div className="relative z-10 order-1 pt-12 md:pt-0 lg:order-2">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-5xl">
              {HERO_TEXTS.abrirEmpresa.title}
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              {HERO_TEXTS.abrirEmpresa.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton message={WHATSAPP_MESSAGES.abrirEmpresa} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "mudeDeContador") {
    return (
      <section className="relative min-h-[80vh] overflow-hidden bg-primary-50 md:min-h-0 md:py-16 lg:py-20">
        <div className="container-padding mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-4/3 overflow-hidden rounded-2xl lg:order-1 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/images/hero/hero-2.jpg"
              alt="Mudar de contador para Portocon Contabilidade e Assessoria LTDA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
            <div
              className="absolute -bottom-16 -left-8 h-[200px] w-[200px] rounded-full bg-secondary-600/25 mix-blend-multiply md:h-[380px] md:w-[380px]"
              aria-hidden
            />
          </div>

          <div className="relative z-10 order-1 pt-12 md:pt-0 lg:order-2">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-5xl">
              {HERO_TEXTS.mudeDeContador.title}
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              {HERO_TEXTS.mudeDeContador.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton message={WHATSAPP_MESSAGES.mudeDeContador} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "sobre") {
    return (
      <section className="relative min-h-0 overflow-hidden bg-linear-to-b from-primary-50 to-white py-10 md:py-16 lg:py-20">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <div className="relative pt-12 text-center md:pt-0">
              <h1 className="relative z-10 mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                {HERO_TEXTS.sobre.title}
              </h1>
              <p className="relative z-10 mb-8 text-lg text-gray-600 md:text-xl lg:text-2xl">
                {HERO_TEXTS.sobre.subtitle}
              </p>
              <div className="relative z-10 flex justify-center">
                <WhatsAppButton message={WHATSAPP_MESSAGES.sobre} />
              </div>
              <div
                className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-600/25 mix-blend-multiply md:h-[480px] md:w-[480px]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "escritorio") {
    return (
      <section className="relative min-h-[80vh] overflow-hidden bg-primary-50 md:min-h-0 md:py-16 lg:py-20">
        <div className="container-padding mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 pt-12 md:pt-0">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-5xl">
              {HERO_TEXTS.escritorio.title}
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              {HERO_TEXTS.escritorio.subtitle}
            </p>
            <p className="mb-8 text-gray-600">
              Quer nos visitar ou falar com a gente? Confira endereço, horários
              e canais de contato abaixo ou envie uma mensagem.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton message={WHATSAPP_MESSAGES.escritorio} />
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[360px]">
            <Image
              src="/images/hero/hero-3.jpg"
              alt="Escritório físico da Portocon Contabilidade e Assessoria LTDA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
            <div
              className="absolute inset-0 bg-linear-to-br from-primary-600/10 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </section>
    );
  }

  const fallbackTexts =
    variant === "plataforma" ? HERO_TEXTS.plataforma : HERO_TEXTS.home;
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-primary-50 md:min-h-0 md:py-16 lg:py-20">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            {fallbackTexts.title}
          </h1>
          <p className="mb-8 text-xl text-gray-600 md:text-2xl">
            {fallbackTexts.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
