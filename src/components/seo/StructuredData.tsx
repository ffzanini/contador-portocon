import { PORTOCON } from "@/constants/portocon";
import { SITE_URL } from "@/constants/seo";

export function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: PORTOCON.name,
    legalName: PORTOCON.legalName,
    description:
      "Escritório de contabilidade especializado em descomplicar a rotina dos pequenos empresários",
    url: SITE_URL,
    image: `${SITE_URL}/images/logo/portocon-2.png`,
    telephone: PORTOCON.contact.phone,
    email: PORTOCON.contact.email,
    taxID: PORTOCON.cnpj,
    identifier: PORTOCON.crc,
    address: {
      "@type": "PostalAddress",
      streetAddress: PORTOCON.address.street,
      addressLocality: PORTOCON.address.city,
      addressRegion: PORTOCON.address.state,
      postalCode: PORTOCON.address.zipCode,
      addressCountry: "BR",
    },
    priceRange: "R$289+",
    areaServed: [
      {
        "@type": "City",
        name: "Brusque",
        containedInPlace: {
          "@type": "State",
          name: "Santa Catarina",
        },
      },
      {
        "@type": "State",
        name: "Santa Catarina",
      },
      {
        "@type": "Country",
        name: "Brasil",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    serviceType: [
      "Contabilidade",
      "Abertura de Empresa",
      "Departamento Fiscal",
      "Departamento Pessoal",
      "Departamento Contábil",
    ],
    foundingDate: `${PORTOCON.stats.foundedYear}-01-01`,
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
    name: PORTOCON.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PORTOCON.contact.phone,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      PORTOCON.socials.instagram,
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
