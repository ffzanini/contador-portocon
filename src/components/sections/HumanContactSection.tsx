import { Section } from "@/components/ui/Section";
import { HUMAN_CONTACT_SECTION } from "@/constants/protocon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HumanContactSection() {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            {HUMAN_CONTACT_SECTION.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            {HUMAN_CONTACT_SECTION.intro}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {HUMAN_CONTACT_SECTION.blocks.map((block, index) => (
            <div
              key={index}
              className={`rounded-xl bg-white p-6 shadow-md ${
                block.type === "your-choice"
                  ? "w-full md:col-span-2 border-2 border-primary-600/20 bg-primary-600/5"
                  : ""
              }`}
            >
              {block.type === "presencial" && (
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary-600">
                  Presencial
                </span>
              )}
              {block.type === "online" && (
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary-600">
                  Online
                </span>
              )}
              {block.type === "your-choice" && (
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary-600">
                  O que não muda
                </span>
              )}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {block.title}
              </h3>
              <p className="mb-4 text-gray-600">{block.description}</p>
              {"showCta" in block && block.showCta && (
                <WhatsAppButton variant="button" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
