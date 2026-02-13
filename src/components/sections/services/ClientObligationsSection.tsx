import { Section } from "@/components/ui/Section";
import { ContactOptions } from "@/components/ui/ContactOptions";

export function ClientObligationsSection() {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Sua parte na parceria
        </h2>
        <p className="mb-8 text-lg text-gray-600 leading-relaxed">
          Para prestar o serviço com qualidade, a Portocon conta com a
          colaboração do cliente no envio de documentos e informações nos prazos
          combinados. Na primeira conversa, alinhamos expectativas e combinamos a
          rotina.
        </p>
        <p className="mb-6 font-semibold text-gray-700">
          Quer saber como funciona na prática? Agende uma conversa.
        </p>
        <ContactOptions
          whatsappMessage="Olá! Gostaria de saber como funciona na prática o envio de documentos e prazos. Vi o site!"
          emailSubject="Serviços Prestados - Como funciona"
        />
      </div>
    </Section>
  );
}
