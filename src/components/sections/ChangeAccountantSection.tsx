import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { ContactOptions } from "@/components/ui/ContactOptions";

export function ChangeAccountantSection() {
  return (
    <Section className="bg-gray-100">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center md:gap-12">
        <div className="flex-1 text-left">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Você já tem uma empresa?
          </h2>
          <p className="mb-4 text-base text-gray-600 md:text-lg">
            Aproveite o seu tempo ao máximo, mude para uma contabilidade que
            ajuda a deixar seu dia mais fácil.
          </p>
        </div>
        <div className="shrink-0">
          <CTAButton
            href="/mudar-de-contador"
            className="sm:whitespace-nowrap px-8 py-4"
          >
            MUDAR DE CONTADOR
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
