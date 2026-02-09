import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { PageLoader } from "@/components/ui/PageLoader";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { FAQS, PROTOCON } from "@/constants/protocon";
import { socials } from "@/constants/socials";
import { SITE_URL } from "@/constants/seo";

const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection").then((mod) => ({
      default: mod.AboutSection,
    })),
  {
    loading: () => <PageLoader />,
    ssr: true,
  },
);

const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection").then((mod) => ({
      default: mod.FAQSection,
    })),
  {
    loading: () => <PageLoader />,
    ssr: true,
  },
);

const PeopleFocusedSection = dynamic(
  () =>
    import("@/components/sections/PeopleFocusedSection").then((mod) => ({
      default: mod.PeopleFocusedSection,
    })),
  {
    loading: () => <PageLoader />,
    ssr: true,
  },
);

export const metadata: Metadata = {
  title: "Nosso Escritório | Protocon Contabilidade",
  description:
    "Conheça o escritório físico da Protocon. Um espaço moderno e acolhedor pronto para receber você sempre que precisar de atendimento presencial.",
  openGraph: {
    title: "Nosso Escritório | Protocon Contabilidade",
    description:
      "Conheça o escritório físico da Protocon. Um espaço moderno e acolhedor pronto para receber você sempre que precisar.",
    url: `${SITE_URL}/escritorio`,
  },
};

export default function EscritorioPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Sobre", url: `${SITE_URL}/sobre` },
          { name: "Nosso Escritório", url: `${SITE_URL}/escritorio` },
        ]}
      />
      <Header />
      <main>
        <Hero variant="escritorio" />
        <Section id="conheca-nosso-espaco">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Conheça nosso espaço
              </h2>
              <p className="text-lg text-gray-600">
                Somos digitais por essência, mas não abrimos mão de um espaço
                físico pronto para receber você sempre que precisar.
              </p>
            </div>

            <div className="mb-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Localização
                </h3>
                <p className="mb-4 text-gray-600">{PROTOCON.address.full}</p>
                <p className="text-sm text-gray-500">
                  Estamos sempre prontos para receber você pessoalmente.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Contato
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Telefone:</strong> {PROTOCON.contact.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {PROTOCON.contact.email}
                  </p>
                  <p>
                    <strong>Horário de atendimento:</strong>{" "}
                    {PROTOCON.contact.officeHours}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Redes sociais
                </h3>
                <div className="flex flex-col gap-3">
                  {socials
                    .filter(
                      (s) => s.name === "Instagram" || s.name === "LinkedIn",
                    )
                    .map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-4 py-2 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-700"
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                          {item.name}
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Section>
        <FAQSection faqs={FAQS} />
        <PeopleFocusedSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
