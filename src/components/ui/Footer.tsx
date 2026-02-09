import Link from "next/link";
import Image from "next/image";
import { PROTOCON } from "@/constants/protocon";
import { socials } from "@/constants/socials";

const footerNavigation = {
  sobre: [
    { name: "Página inicial", href: "/" },
    { name: "Sobre nós", href: "/sobre" },
    { name: "Nosso escritório", href: "/escritorio" },
  ],
  contabilidade: [
    { name: "Abrir empresa", href: "/abrir-empresa" },
    { name: "Mudar de contador", href: "/mudar-de-contador" },
    {
      name: "Fale com um de nossos especialistas",
      href: `https://api.whatsapp.com/send/?phone=${PROTOCON.contact.whatsapp}&text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Protocon Contabilidade.")}`,
      external: true,
    },
  ],
  seguranca: [
    { name: "Política de privacidade", href: "/politica-de-privacidade" },
    { name: "Termos de uso", href: "/termos-de-uso" },
  ],
};

const footerSocials = socials.filter(
  (s) => s.name === "Instagram" || s.name === "LinkedIn",
);

export function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container-padding mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Sobre a Protocon
            </h3>
            <ul className="space-y-2">
              {footerNavigation.sobre.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Contabilidade
            </h3>
            <ul className="space-y-2">
              {footerNavigation.contabilidade.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Segurança
            </h3>
            <ul className="space-y-2">
              {footerNavigation.seguranca.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Redes sociais
            </h3>
            <ul className="space-y-2">
              {footerSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-secondary-600"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Quem nós somos
            </h3>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/protocon-2.png"
                alt="Protocon Contabilidade"
                width={1080}
                height={305}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 font-semibold text-gray-900">{PROTOCON.name}</p>
            <address className="mt-3 not-italic">
              <p className="mb-1.5 text-sm text-gray-600">
                CNPJ: {PROTOCON.cnpj}
              </p>
              <p className="mb-1.5 text-sm text-gray-600">
                CRCSC: {PROTOCON.crc}
              </p>
              <p className="text-sm text-gray-600">{PROTOCON.address.full}</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Protocon - Página inicial"
            >
              <Image
                src="/images/logo/protocon-2.png"
                alt="Protocon Contabilidade"
                width={1300}
                height={400}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            <span className="hidden text-gray-400 sm:inline" aria-hidden>
              •
            </span>
            <p className="text-sm text-gray-600" suppressHydrationWarning>
              ©{new Date().getFullYear()} {PROTOCON.name} todos os direitos
              reservados.
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-gray-500">
            Site desenvolvido por{" "}
            <a
              href="https://www.ffzanini.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-secondary-600"
            >
              Felipe Frantz Zanini
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
