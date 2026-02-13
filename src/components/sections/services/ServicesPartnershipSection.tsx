import { Section } from "@/components/ui/Section";
import { ContactOptions } from "@/components/ui/ContactOptions";

const BLOCKS = [
  {
    title: "Sua parte na parceria",
    description:
      "Para prestar o serviço com qualidade, a Portocon conta com a colaboração do cliente no envio de documentos e informações nos prazos combinados. Na primeira conversa, alinhamos expectativas e combinamos a rotina.",
  },
  {
    title: "Escopo e serviços adicionais",
    description:
      "Alguns serviços específicos não fazem parte do escopo padrão. Na reunião de alinhamento, a equipe explica o que está incluso e o que pode ser contratado à parte, de forma transparente.",
  },
  {
    title: "Investimento",
    description:
      "Os honorários são definidos de forma transparente e personalizada, conforme o porte e a necessidade da empresa. Na primeira conversa é possível receber uma proposta sem compromisso.",
  },
] as const;

export function ServicesPartnershipSection() {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center pb-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Como trabalhamos juntos para o seu projeto dar certo
          </h2>
          <p className="text-lg text-gray-600">
            O que esperar de cada lado, o que está incluso e como receber uma
            proposta personalizada.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {BLOCKS.map((block, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary-600 md:p-8"
            >
              <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                {block.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 mt-8">
          <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary-600 md:p-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Ainda tem alguma dúvida?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Nossa equipe está pronta para esclarecer todos os seus
              questionamentos e apresentar uma proposta personalizada para o seu
              negócio.
            </p>
            <ContactOptions
              whatsappMessage="Olá! Tenho interesse em conhecer os serviços da Portocon e receber uma proposta. Vi o site!"
              emailSubject="Serviços Prestados"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
