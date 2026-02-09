"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";
import { PROTOCON, WHATSAPP_MESSAGES } from "@/constants/protocon";
import { cn } from "@/libs/cn";

const navigation = [
  { name: "Abrir Empresa", href: "/abrir-empresa" },
  { name: "Mudar de Contador", href: "/mudar-de-contador" },
];

const sobreMenuItems = [
  { name: "Sobre Protocon", href: "/sobre" },
  { name: "Nosso escritório", href: "/escritorio" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = useState(false);
  const [sobreMobileOpen, setSobreMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSobreActive = sobreMenuItems.some((item) => pathname === item.href);

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${PROTOCON.contact.whatsapp}&text=${encodeURIComponent(WHATSAPP_MESSAGES.abrirEmpresa)}`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (!isVisible) {
      setSobreDropdownOpen(false);
    }
  }, [isVisible]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSobreDropdownOpen(false);
      }
    }

    if (sobreDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sobreDropdownOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white shadow-sm transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <nav className="container-padding mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Protocon - Página inicial"
          >
            <Image
              src="/images/logo/protocon.png"
              alt="Protocon Contabilidade"
              width={1300}
              height={400}
              className="h-18 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-base font-semibold transition-all duration-200 hover:bg-secondary-50 hover:text-secondary-600",
                    isActive ? "text-secondary-600" : "text-gray-700",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setSobreDropdownOpen(true)}
              onMouseLeave={() => setSobreDropdownOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-base font-semibold transition-all duration-200 hover:bg-secondary-50 hover:text-secondary-600 cursor-pointer",
                  sobreDropdownOpen && "bg-gray-100",
                  isSobreActive && "text-secondary-600",
                )}
                aria-expanded={sobreDropdownOpen}
                aria-haspopup="true"
              >
                Sobre
                <RiArrowDownSLine
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    sobreDropdownOpen && "rotate-180",
                  )}
                />
              </button>

              {sobreDropdownOpen && (
                <div className="absolute left-0 top-full w-42">
                  <div className="h-1" />
                  <div className="rounded-lg bg-white shadow-lg">
                    {sobreMenuItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-base font-semibold transition-colors hover:bg-secondary-50 hover:text-secondary-600",
                            isActive ? "text-secondary-600" : "text-gray-700",
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-secondary-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 active:scale-95"
            >
              Abra sua empresa
            </a>
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <RiCloseLine className="h-6 w-6 text-gray-700" />
            ) : (
              <RiMenuLine className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "md:hidden",
            mobileMenuOpen ? "block" : "hidden",
            "border-t border-gray-200 py-4",
          )}
        >
          <div className="flex flex-col gap-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-semibold transition-colors hover:text-secondary-600",
                    isActive ? "text-secondary-600" : "text-gray-700",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <div>
              <button
                type="button"
                onClick={() => setSobreMobileOpen(!sobreMobileOpen)}
                className={cn(
                  "flex w-full items-center justify-between text-base font-semibold transition-colors hover:text-secondary-600",
                  isSobreActive ? "text-secondary-600" : "text-gray-700",
                )}
                aria-expanded={sobreMobileOpen}
              >
                Sobre
                <RiArrowDownSLine
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    sobreMobileOpen && "rotate-180",
                  )}
                />
              </button>
              {sobreMobileOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {sobreMenuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "text-base font-semibold transition-colors hover:text-secondary-600",
                          isActive ? "text-secondary-600" : "text-gray-600",
                        )}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setSobreMobileOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-secondary-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 active:scale-95"
              >
                Abra sua empresa
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
