import { Section } from "@/components/ui/Section";
import { StepCard } from "@/components/ui/StepCard";
import { ContactOptions } from "@/components/ui/ContactOptions";
import { OPEN_COMPANY_STEPS } from "@/constants/portocon";

export function OpenCompanySection() {
  return (
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
      <div className="mt-12 flex justify-center">
        <div className="text-center">
          <p className="mb-4 text-lg font-semibold text-gray-900">
            Fale com nosso especialista ou abra um CNPJ
          </p>
          <ContactOptions whatsappMessage={OPEN_COMPANY_STEPS[0].title} emailSubject="Abrir Empresa" />
        </div>
      </div>
    </Section>
  );
}
