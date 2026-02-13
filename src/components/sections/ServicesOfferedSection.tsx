import { Section } from "@/components/ui/Section";
import { ContactOptions } from "@/components/ui/ContactOptions";

const SERVICES = [
  {
    title: "Abertura de Empresa",
    description:
      "Abertura completa de empresas com suporte especializado em cada etapa. Processo 100% digital, rápido e descomplicado.",
  },
  {
    title: "Departamento Fiscal",
    description:
      "Gestão completa de impostos e obrigações fiscais. Acompanhamento mensal, cálculos precisos e cumprimento de prazos.",
  },
  {
    title: "Departamento Pessoal",
    description:
      "Gestão de folha de pagamento, admissões, demissões e todas as obrigações trabalhistas. Suporte completo para seus funcionários.",
  },
  {
    title: "Departamento Contábil",
    description:
      "Organização e controle contábil da sua empresa. Balanços, demonstrações financeiras e relatórios gerenciais.",
  },
  {
    title: "Consultoria Contábil e Fiscal",
    description:
      "Orientação estratégica para decisões importantes do seu negócio. Planejamento tributário e consultoria especializada.",
  },
  {
    title: "Mudança de Contador",
    description:
      "Processo completo de migração de contabilidade. Cuidamos de toda documentação e comunicação com o escritório anterior.",
  },
];

export function ServicesOfferedSection() {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-7xl font-bold text-gray-900 md:text-4xl">
            Serviços Prestados
          </h2>
          <p className="mx-auto max-w-4xl text-lg text-gray-600">
            Oferecemos uma gama completa de serviços contábeis para atender
            todas as necessidades da sua empresa, desde a abertura até o dia a
            dia operacional.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center">
          <p className="mb-6 text-lg font-semibold text-gray-900">
            Entre em contato e descubra como podemos ajudar sua empresa
          </p>
          <ContactOptions emailSubject="Serviços Prestados" />
        </div>
      </div>
    </Section>
  );
}
