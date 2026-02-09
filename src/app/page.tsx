import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/ui/Hero";
import { PageLoader } from "@/components/ui/PageLoader";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { SITE_URL, PERSON } from "@/constants/seo";

const FeaturesSection = dynamic(
  () =>
    import("@/components/sections/FeaturesSection").then((mod) => ({
      default: mod.FeaturesSection,
    })),
  { loading: () => <PageLoader />, ssr: true }
);

const OpenCompanySection = dynamic(
  () =>
    import("@/components/sections/OpenCompanySection").then((mod) => ({
      default: mod.OpenCompanySection,
    })),
  { loading: () => <PageLoader />, ssr: true }
);

const ChangeAccountantSection = dynamic(
  () =>
    import("@/components/sections/ChangeAccountantSection").then((mod) => ({
      default: mod.ChangeAccountantSection,
    })),
  { loading: () => <PageLoader />, ssr: true }
);

const PeopleFocusedSection = dynamic(
  () =>
    import("@/components/sections/PeopleFocusedSection").then((mod) => ({
      default: mod.PeopleFocusedSection,
    })),
  { loading: () => <PageLoader />, ssr: true }
);

const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection").then((mod) => ({
      default: mod.AboutSection,
    })),
  { loading: () => <PageLoader />, ssr: true }
);

export const metadata: Metadata = {
  title: "Home",
  description: PERSON.description,
  openGraph: {
    title: `${PERSON.name} | ${PERSON.jobTitle}`,
    description: PERSON.description,
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: "Home", url: SITE_URL }]} />
      <Header />
      <main>
        <Hero variant="home" />
        <FeaturesSection />
        <OpenCompanySection />
        <ChangeAccountantSection />
        <PeopleFocusedSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
