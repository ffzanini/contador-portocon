import { Section } from "@/components/ui/Section";
import { PROTOCON } from "@/constants/protocon";

export function StatsSection() {
  const {
    professionalExperienceYears,
    middleValue,
    middleLabel,
    middleSubtitle,
    purposeNumber,
    purposeLabel,
    purposeSubtitle,
  } = PROTOCON.stats;

  return (
    <Section className="bg-secondary-100">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary-600 md:text-5xl">
            {professionalExperienceYears}+
          </div>
          <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-600">
            ANOS NO MERCADO
          </div>
          <div className="text-sm text-gray-600">
            Experiência em contabilidade
          </div>
        </div>
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary-600 md:text-5xl">
            {middleValue}
          </div>
          <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-600">
            {middleLabel}
          </div>
          <div className="text-sm text-gray-600">{middleSubtitle}</div>
        </div>
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold text-primary-600 md:text-5xl">
            {purposeNumber}
          </div>
          <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-600">
            {purposeLabel}
          </div>
          <div className="text-sm text-gray-600">{purposeSubtitle}</div>
        </div>
      </div>
    </Section>
  );
}
