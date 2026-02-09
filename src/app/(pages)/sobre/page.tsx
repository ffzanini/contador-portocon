import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { PageLoader } from "@/components/ui/PageLoader";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { FAQS } from "@/constants/protocon";
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

const PersonalitySection = dynamic(
  () =>
    import("@/components/sections/PersonalitySection").then((mod) => ({
      default: mod.PersonalitySection,
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
  title: "Sobre | Protocon Contabilidade",
  description:
    "Conheça a Protocon: um escritório novo fundado por uma dupla de sócios com anos de experiência em contabilidade. Contabilidade prática, moderna e humanizada.",
  openGraph: {
    title: "Sobre | Protocon Contabilidade",
    description:
      "Conheça a Protocon: um escritório novo fundado por uma dupla de sócios com anos de experiência em contabilidade.",
    url: `${SITE_URL}/sobre`,
  },
};

export default function SobrePage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Sobre", url: `${SITE_URL}/sobre` },
        ]}
      />
      <Header />
      <main>
        <Hero variant="sobre" />
        <AboutSection variant="full" />
        <PersonalitySection />
        <StatsSection />
        <FAQSection faqs={FAQS} />
        <PeopleFocusedSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
