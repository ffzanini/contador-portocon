import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES } from "@/constants/portocon";

export function FeaturesSection() {
  return (
    <Section>
      <h2 className="mb-10 text-3xl font-bold leading-tight text-gray-900 md:mb-12 md:text-4xl lg:text-[2.5rem]">
        Contabilidade que inspira confiança. Simples, humana e sempre ao seu
        lado.
      </h2>
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <FeatureCard
          title={FEATURES[0].title}
          description={FEATURES[0].description}
        />
        <FeatureCard
          title={FEATURES[1].title}
          description={FEATURES[1].description}
        />
        <FeatureCard
          title={FEATURES[2].title}
          description={FEATURES[2].description}
        />
        <div className="flex h-full min-h-[200px] flex-col justify-between rounded-2xl bg-primary-600 p-6 text-white md:p-8">
          <p className="text-xl font-semibold md:text-2xl">
            Pronto para abrir sua empresa? Comece com quem entende do assunto.
          </p>
          <div className="mt-6">
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-secondary-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Conheça a Portocon
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
