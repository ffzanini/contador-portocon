import { Section } from "@/components/ui/Section";
import { ContactOptions } from "@/components/ui/ContactOptions";

export function ImportantConsiderationsSection() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Escopo e serviços adicionais
        </h2>
        <p className="mb-8 text-lg text-gray-600 leading-relaxed">
          Alguns serviços específicos não fazem parte do escopo padrão. Na
          reunião de alinhamento, a equipe explica o que está incluso e o que
          pode ser contratado à parte, de forma transparente.
        </p>
        <p className="mb-6 font-semibold text-gray-700">
          Agende uma consulta e receba um escopo personalizado.
        </p>
        <ContactOptions
          whatsappMessage="Olá! Gostaria de agendar uma consulta para receber um escopo personalizado dos serviços. Vi o site!"
          emailSubject="Serviços Prestados - Escopo personalizado"
        />
      </div>
    </Section>
  );
}
