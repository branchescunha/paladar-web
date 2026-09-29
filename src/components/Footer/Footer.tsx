import Link from "next/link";
import styles from "./Footer.module.css";

const navigationItems = [
  { label: "Início", href: "/" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Marmitas", href: "/marmitas" },
  { label: "Sobre", href: "/sobre" },
  { label: "Buffet", href: "/buffet" },
  { label: "Contato", href: "/contato" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.brand} aria-label="Paladar">
            <Link
              className={styles.wordmark}
              href="/"
              aria-label="Paladar — página inicial"
            >
              Paladar
            </Link>
            <p className={styles.tagline}>
              Comida feita com cuidado para reunir pessoas à mesa.
            </p>
          </section>

          <nav aria-labelledby="footer-navigation-title">
            <h2 id="footer-navigation-title" className={styles.sectionTitle}>
              Navegação
            </h2>
            <ul className={styles.navigationList}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link className={styles.footerLink} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-location-title">
            <h2 id="footer-location-title" className={styles.sectionTitle}>
              Onde estamos
            </h2>
            <address className={styles.address}>
              QNO 11 Conjunto O Casa 16
              <br />
              Avenida Oeste, Setor O, Ceilândia - DF
            </address>

            <div className={styles.schedule}>
              <h3 className={styles.detailTitle}>Funcionamento</h3>
              <p>Todos os dias</p>
              <p>
                <time dateTime="11:30">11h30</time> às{" "}
                <time dateTime="15:00">15h</time>
              </p>
            </div>
          </section>

          <section aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className={styles.sectionTitle}>
              Contato
            </h2>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>WhatsApp geral</span>
                <a
                  className={styles.contactLink}
                  href="https://wa.me/5561984163455"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (61) 98416-3455
                  <span className={styles.visuallyHidden}>
                    {" "}
                    (abre em nova aba)
                  </span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>
                  Marmitas e delivery
                </span>
                <a
                  className={styles.contactLink}
                  href="https://wa.me/5561984901611"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (61) 98490-1611
                  <span className={styles.visuallyHidden}>
                    {" "}
                    (abre em nova aba)
                  </span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Instagram</span>
                <a
                  className={styles.contactLink}
                  href="https://www.instagram.com/paladarprimerestaurante/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @paladarprimerestaurante
                  <span className={styles.visuallyHidden}>
                    {" "}
                    (abre em nova aba)
                  </span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>E-mail</span>
                <a
                  className={styles.contactLink}
                  href="mailto:churrascaria.paladar.df@gmail.com"
                >
                  churrascaria.paladar.df@gmail.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Eventos</span>
                <a
                  className={styles.contactLink}
                  href="https://buffetpaladar.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paladar Buffet
                  <span className={styles.visuallyHidden}>
                    {" "}
                    (abre em nova aba)
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.copyright}>
          <p>© {currentYear} Paladar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
