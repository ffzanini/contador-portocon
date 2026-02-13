import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";

interface AboutSectionProps {
  variant?: "summary" | "full" | "change-accountant";
}

export function AboutSection({ variant = "summary" }: AboutSectionProps) {
  if (variant === "change-accountant") {
    return (
      <Section>
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-600 p-6 shadow-lg md:flex-row md:gap-8 md:p-8 lg:p-10">
          <div className="flex-1 text-left">
            <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Mude para uma contabilidade que ajuda a deixar seu dia mais fácil.
            </h2>
            <p className="text-lg text-white/90">
              Aproveite o seu tempo ao máximo, mude para uma contabilidade que
              ajuda a deixar seu dia mais fácil.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/mudar-de-contador"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Mude de contador
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  if (variant === "summary") {
    return (
      <Section>
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-600 p-6 shadow-lg md:flex-row md:gap-8 md:p-8 lg:p-10">
          <div className="flex-1 text-left">
            <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Contabilidade exige tempo, mas não o seu.
            </h2>
            <p className="text-lg text-white/90">
              Deixe a burocracia e os prazos conosco. Nossos especialistas
              cuidam de tudo para você focar no que importa: o seu negócio.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/abrir-empresa"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Converse Conosco
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative order-2 aspect-4/3 overflow-hidden rounded-2xl lg:order-1 lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Sobre a Portocon Contabilidade e Assessoria LTDA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            <div
              className="absolute inset-0 bg-linear-to-br from-primary-600/10 to-transparent"
              aria-hidden
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Sobre a Portocon
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                A Portocon é um escritório novo, fundado por uma dupla de sócios
                com anos de experiência em contabilidade. Unimos prática e
                tecnologia para descomplicar a rotina do pequeno empresário, com
                atendimento humanizado e dedicado.
              </p>
              <p>
                Unimos a prestação de serviços de contabilidade com soluções
                digitais fáceis de usar e o compromisso de encantar a cada
                atendimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
