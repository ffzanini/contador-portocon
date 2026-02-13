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
      PORTOCON.socials.linkedin,
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
