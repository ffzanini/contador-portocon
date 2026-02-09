import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { PageLoader } from "@/components/ui/PageLoader";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { OPEN_COMPANY_STEPS, FAQS } from "@/constants/protocon";
import { SITE_URL } from "@/constants/seo";

const StepCard = dynamic(
  () =>
    import("@/components/ui/StepCard").then((mod) => ({
      default: mod.StepCard,
    })),
  {
    loading: () => <PageLoader />,
    ssr: true,
  },
);

const ChangeAccountantSection = dynamic(
  () =>
    import("@/components/sections/ChangeAccountantSection").then((mod) => ({
      default: mod.ChangeAccountantSection,
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

export const metadata: Metadata = {
  title: "Abrir Empresa | Protocon Contabilidade",
  description:
    "Abra sua empresa em apenas 3 passos com a Protocon. Processo simples, rápido e descomplicado. Conte com especialistas para iniciar seu negócio.",
  openGraph: {
    title: "Abrir Empresa | Protocon Contabilidade",
    description: "Abra sua empresa em apenas 3 passos com a Protocon.",
    url: `${SITE_URL}/abrir-empresa`,
  },
};

export default function AbrirEmpresaPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Abrir Empresa", url: `${SITE_URL}/abrir-empresa` },
        ]}
      />
      <Header />
      <main>
        <Hero variant="abrirEmpresa" />
        <Section>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Abra sua empresa em apenas 3 passos.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {OPEN_COMPANY_STEPS.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                image={step.image}
              />
            ))}
          </div>
        </Section>
        <ChangeAccountantSection />
        <WhyChooseSection />
        <StatsSection />
        <FAQSection faqs={FAQS} />
        <AboutSection variant="change-accountant" />
      </main>
      <Footer />
    </>
  );
}
