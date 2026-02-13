import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { PageLoader } from "@/components/ui/PageLoader";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { FAQS, PORTOCON } from "@/constants/portocon";
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
  title: "Nosso Escritório | Portocon Contabilidade e Assessoria LTDA",
  description:
    "Conheça o escritório físico da Portocon. Um espaço moderno e acolhedor pronto para receber você sempre que precisar de atendimento presencial.",
  openGraph: {
    title: "Nosso Escritório | Portocon Contabilidade e Assessoria LTDA",
    description:
      "Conheça o escritório físico da Portocon. Um espaço moderno e acolhedor pronto para receber você sempre que precisar.",
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

            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Informações Empresariais
                  </h3>
                  <div className="space-y-2.5 text-gray-600">
                    <p>
                      <strong className="text-gray-900">Razão Social:</strong>{" "}
                      {PORTOCON.legalName}
                    </p>
                    <p>
                      <strong className="text-gray-900">CNPJ:</strong>{" "}
                      {PORTOCON.cnpj}
                    </p>
                    <p>
                      <strong className="text-gray-900">CRC:</strong>{" "}
                      {PORTOCON.crc}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Endereço
                  </h3>
                  <address className="not-italic space-y-1 text-gray-600">
                    <p>{PORTOCON.address.street}</p>
                    <p>
                      {PORTOCON.address.neighborhood}, {PORTOCON.address.city} -{" "}
                      {PORTOCON.address.state}
                    </p>
                    <p>CEP: {PORTOCON.address.zipCode}</p>
                  </address>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Nossas redes sociais
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
                            className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-200 hover:text-primary-600"
                          >
                            <Icon className="h-5 w-5 shrink-0" aria-hidden />
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>
                          </a>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Entre em contato
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <p className="mb-2 font-semibold text-gray-900">
                        WhatsApp
                      </p>
                      <a
                        href={`https://api.whatsapp.com/send/?phone=${PORTOCON.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 hover:text-primary-600 hover:underline"
                      >
                        {PORTOCON.contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-gray-900">
                        Telefone
                      </p>
                      <a
                        href={`tel:${PORTOCON.contact.phone.replace(/\D/g, "")}`}
                        className="text-sm text-gray-700 hover:text-primary-600 hover:underline"
                      >
                        {PORTOCON.contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-gray-900">Email</p>
                      <a
                        href={`mailto:${PORTOCON.contact.email}`}
                        className="text-sm text-gray-700 hover:text-primary-600 hover:underline break-all"
                      >
                        {PORTOCON.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-gray-200">
                    <p className="mb-2 font-semibold text-gray-900">
                      Horário de atendimento
                    </p>
                    <p className="text-sm text-gray-700">
                      {PORTOCON.contact.officeHours}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-gray-200">
                    <p className="mb-3 font-semibold text-gray-900">
                      E-mails por departamento
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <p className="mb-2 font-semibold text-gray-900">
                          Contábil
                        </p>
                        <a
                          href={`mailto:${PORTOCON.contact.emails.contabil}`}
                          className="text-sm text-gray-700 hover:text-primary-600 hover:underline break-all"
                        >
                          {PORTOCON.contact.emails.contabil}
                        </a>
                      </div>
                      <div>
                        <p className="mb-2 font-semibold text-gray-900">
                          Fiscal
                        </p>
                        <a
                          href={`mailto:${PORTOCON.contact.emails.fiscal}`}
                          className="text-sm text-gray-700 hover:text-primary-600 hover:underline break-all"
                        >
                          {PORTOCON.contact.emails.fiscal}
                        </a>
                      </div>
                      <div>
                        <p className="mb-2 font-semibold text-gray-900">RH</p>
                        <a
                          href={`mailto:${PORTOCON.contact.emails.rh}`}
                          className="text-sm text-gray-700 hover:text-primary-600 hover:underline break-all"
                        >
                          {PORTOCON.contact.emails.rh}
                        </a>
                      </div>
                    </div>
                  </div>
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
