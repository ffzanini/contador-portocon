import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { Section } from "@/components/ui/Section";
import { ServicesTabsSection } from "@/components/sections/services/ServicesTabsSection";
import { ServicesPartnershipSection } from "@/components/sections/services/ServicesPartnershipSection";
import { SITE_URL } from "@/constants/seo";
import { FAQS, PORTOCON } from "@/constants/portocon";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Serviços Prestados | Portocon Contabilidade e Assessoria LTDA",
  description:
    "Conheça todos os serviços contábeis, fiscais e trabalhistas oferecidos pela Portocon. Área Contábil, Fiscal e Trabalhista com profissionais especializados e mais de 10 anos de experiência.",
  openGraph: {
    title: "Serviços Prestados | Portocon Contabilidade e Assessoria LTDA",
    description:
      "Serviços completos de contabilidade, fiscal e trabalhista. Profissionais especializados com mais de 10 anos de experiência.",
    url: `${SITE_URL}/servicos-prestados`,
  },
  alternates: {
    canonical: `${SITE_URL}/servicos-prestados`,
  },
};

function ServicesStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Accounting Services",
    provider: {
      "@type": "AccountingService",
      name: PORTOCON.name,
      legalName: PORTOCON.legalName,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    description:
      "Serviços completos de contabilidade, fiscal e trabalhista oferecidos pela Portocon Contabilidade e Assessoria LTDA.",
    offers: {
      "@type": "Offer",
      description: "Serviços contábeis especializados",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ServicosPrestadosPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Serviços Prestados", url: `${SITE_URL}/servicos-prestados` },
        ]}
      />
      <ServicesStructuredData />
      <Header />
      <main>
        <Hero />

        <Section className="pb-0! mb-0!">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Contábil, fiscal e trabalhista
            </h2>
            <p className="text-lg text-gray-600">
              Veja como cada área pode atender seu negócio com organização,
              conformidade legal e informações estratégicas para uma gestão mais
              segura e eficiente.
            </p>
          </div>
        </Section>

        <ServicesTabsSection />

        <ServicesPartnershipSection />
        <WhyChooseSection />
        <StatsSection />
        <FAQSection faqs={FAQS} />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
