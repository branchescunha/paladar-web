"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const navigationItems = [
  { label: "Início", href: "/" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Marmitas", href: "/marmitas" },
  { label: "Sobre", href: "/sobre" },
  { label: "Buffet", href: "/buffet" },
  { label: "Contato", href: "/contato" },
] as const;

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.wordmark}
          href="/"
          aria-label="Paladar — página inicial"
          onClick={closeMenu}
        >
          Paladar
        </Link>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Navegação principal"
        >
          <ul className={styles.navigationList}>
            {navigationItems.map((item) => {
              const isActive = isActiveRoute(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    className={`${styles.navigationLink} ${
                      isActive ? styles.navigationLinkActive : ""
                    }`}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link className={styles.cta} href="/marmitas" onClick={closeMenu}>
            Pedir marmita
          </Link>
        </nav>
      </div>
    </header>
  );
}
