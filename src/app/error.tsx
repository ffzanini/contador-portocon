"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-primary-700 md:text-4xl">
        Ocorreu um erro inesperado
      </h1>
      <p className="mt-4 text-base text-gray-600 md:text-lg">
        Tivemos um problema ao carregar esta página. Tente novamente em alguns
        instantes.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-lg border border-primary-200 px-5 py-2.5 text-sm font-semibold text-primary-700 transition hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
