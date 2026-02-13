import { Section } from "@/components/ui/Section";
import { PERSONALITY } from "@/constants/portocon";

export function PersonalitySection() {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Reduzimos burocracia, usamos tecnologia a seu favor e assumimos o
            compromisso de estar ao seu lado.
          </h2>
          <p className="mx-auto max-w-4xl text-lg text-gray-600">
            O resultado: processos claros, atendimento humano e transparência
            em tudo — para você ganhar tempo e focar no que importa.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PERSONALITY.map((trait, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary-600">
                {trait.theme}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {trait.title}
              </h3>
              <p className="flex-1 text-gray-600 leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
