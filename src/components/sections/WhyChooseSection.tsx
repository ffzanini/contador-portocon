import { Section } from "@/components/ui/Section";
import { WHY_CHOOSE, WHATSAPP_MESSAGES, PORTOCON } from "@/constants/portocon";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export function WhyChooseSection() {
  const getWhatsAppMessage = (link: string) => {
    if (link === "/sobre") return WHATSAPP_MESSAGES.sobre;
    if (link === "/escritorio") return WHATSAPP_MESSAGES.escritorio;
    return WHATSAPP_MESSAGES.home;
  };

  const getWhatsAppUrl = (link: string) =>
    `https://api.whatsapp.com/send/?phone=${PORTOCON.contact.whatsapp}&text=${encodeURIComponent(getWhatsAppMessage(link))}`;

  return (
    <Section>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Por que a Portocon é a melhor escolha
            </h2>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/hero/hero-1.jpg"
                alt="Por que a Portocon é a melhor escolha"
                width={550}
                height={480}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 45vw"
                priority
              />
            </div>
            <div>
              <p className="mb-8 text-lg text-gray-600">
                Escolhemos ser diferentes: atendimento humanizado, burocracia
                simplificada e profissionais qualificados. Tudo para você ter
                tranquilidade e focar no que importa — o seu negócio.
              </p>
              <div className="relative flex items-center">
                <div className="h-16 w-16 rounded-full bg-secondary-600" />
                <div className="-ml-8 h-16 w-16 rounded-full bg-primary-600" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {WHY_CHOOSE.map((item, index) => (
              <div
                key={index}
                className={
                  index !== WHY_CHOOSE.length - 1
                    ? "border-b border-gray-200 pb-6"
                    : ""
                }
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-600">{item.description}</p>
                {item.link === "/sobre" || item.link === "/escritorio" ? (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-gray-900 transition-colors hover:text-secondary-600"
                  >
                    <span className="font-medium">{item.linkText}</span>
                    <RiArrowRightLine className="h-5 w-5" />
                  </Link>
                ) : (
                  <a
                    href={getWhatsAppUrl(item.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 transition-colors hover:text-secondary-600"
                  >
                    <span className="font-medium">{item.linkText}</span>
                    <RiArrowRightLine className="h-5 w-5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
