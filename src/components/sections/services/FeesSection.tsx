import { Section } from "@/components/ui/Section";
import { ContactOptions } from "@/components/ui/ContactOptions";

export function FeesSection() {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Investimento
        </h2>
        <p className="mb-8 text-lg text-gray-600 leading-relaxed">
          Os honorários são definidos de forma transparente e personalizada,
          conforme o porte e a necessidade da empresa. Na primeira conversa é
          possível receber uma proposta sem compromisso.
        </p>
        <p className="mb-6 font-semibold text-gray-700">
          Fale conosco e receba uma proposta personalizada.
        </p>
        <ContactOptions
          whatsappMessage="Olá! Gostaria de receber uma proposta personalizada dos serviços. Vi o site!"
          emailSubject="Serviços Prestados - Proposta"
        />
      </div>
    </Section>
  );
}
