import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { PageLoader } from "@/components/ui/PageLoader";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { CHANGE_ACCOUNTANT_STEPS, FAQS } from "@/constants/portocon";
import { SITE_URL } from "@/constants/seo";
import { ContactOptions } from "@/components/ui/ContactOptions";

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

const WhyChooseSection = dynamic(
  () =>
    import("@/components/sections/WhyChooseSection").then((mod) => ({
      default: mod.WhyChooseSection,
    })),
  {
    loading: () => <PageLoader />,
    ssr: true,
  },
);

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection").then((mod) => ({
      default: mod.ServicesSection,
    })),
  {
    loading: () => <PageLoader />,
    ssr: true,
  },
);

const HumanContactSection = dynamic(
  () =>
    import("@/components/sections/HumanContactSection").then((mod) => ({
      default: mod.HumanContactSection,
    })),
  {
    loading: () => <PageLoader />,
    ssr: true,
  },
);

const StatsSection = dynamic(
  () =>
    import("@/components/sections/StatsSection").then((mod) => ({
      default: mod.StatsSection,
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

export const metadata: Metadata = {
  title: "Mude de Contador | Portocon Contabilidade",
  description:
    "Mudar de contabilidade nunca foi tão simples. Conte com a Portocon para te ajudar com todo o processo de mudança de contador. Processo rápido e descomplicado.",
  openGraph: {
    title: "Mude de Contador | Portocon Contabilidade",
    description: "Mudar de contabilidade nunca foi tão simples.",
    url: `${SITE_URL}/mudar-de-contador`,
  },
};

export default function MudeDeContadorPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Mude de Contador", url: `${SITE_URL}/mudar-de-contador` },
        ]}
      />
      <Header />
      <main>
        <Hero variant="mudeDeContador" />
        <Section>
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Três passos e você já está conosco
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Nós conduzimos toda a troca: documentação, comunicação com o
                antigo escritório e regularização. Você acompanha em poucos
                passos e passa a ter uma contabilidade que te entende.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {CHANGE_ACCOUNTANT_STEPS.map((step) => (
                <div key={step.number} className="rounded-xl bg-gray-50 p-6">
                  <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                      PASSO {step.number}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <div className="text-center">
                <p className="mb-4 text-lg font-semibold text-gray-900">
                  Fale com nosso especialista ou troque de contabilidade
                </p>
                <ContactOptions emailSubject="Trocar de Contador" />
              </div>
            </div>
          </div>
        </Section>
        <HumanContactSection />
        <WhyChooseSection />
        <StatsSection />
        <FAQSection faqs={FAQS} />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
