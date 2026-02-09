import Image from "next/image";
import { cn } from "@/libs/cn";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
}

export function StepCard({
  number,
  title,
  description,
  image,
  className,
}: StepCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="mb-4">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
          PASSO {number}
        </span>
      </div>
      {image && (
        <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
