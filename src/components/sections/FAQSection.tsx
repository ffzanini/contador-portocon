"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { RiArrowDownSLine } from "react-icons/ri";
import { cn } from "@/libs/cn";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: readonly FAQ[];
  title?: string;
}

export function FAQSection({
  faqs,
  title = "Perguntas Frequentes",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-3 p-6 text-left transition-colors hover:bg-secondary-50"
              >
                <span className="min-w-0 flex-1 font-semibold text-gray-900">
                  {faq.question}
                </span>
                <RiArrowDownSLine
                  className={cn(
                    "h-5 w-5 shrink-0 text-gray-500 transition-transform",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0",
                )}
              >
                <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
