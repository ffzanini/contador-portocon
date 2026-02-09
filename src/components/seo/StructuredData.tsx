import { PROTOCON } from "@/constants/protocon";
import { SITE_URL } from "@/constants/seo";

export function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: PROTOCON.name,
    description:
      "Escritório de contabilidade especializado em descomplicar a rotina dos pequenos empresários",
    url: SITE_URL,
    telephone: PROTOCON.contact.phone,
    email: PROTOCON.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: PROTOCON.address.street,
      addressLocality: PROTOCON.address.city,
      addressRegion: PROTOCON.address.state,
      postalCode: PROTOCON.address.zipCode,
      addressCountry: "BR",
    },
    priceRange: "R$289+",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: [
      "Contabilidade",
      "Abertura de Empresa",
      "Departamento Fiscal",
      "Departamento Pessoal",
      "Departamento Contábil",
    ],
    foundingDate: `${PROTOCON.stats.foundedYear}-01-01`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PROTOCON.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PROTOCON.contact.phone,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      PROTOCON.socials.instagram,
      PROTOCON.socials.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
