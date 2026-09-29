import Link from "next/link";
import { navigationItems, siteContent, siteRoutes } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <section
            className={styles.brand}
            aria-label={siteContent.brand.primaryName}
          >
            <Link
              className={styles.wordmark}
              href={siteRoutes.home}
              aria-label={`${siteContent.brand.primaryName} — página inicial`}
            >
              {siteContent.brand.primaryName}
            </Link>
            <p className={styles.tagline}>{siteContent.tagline}</p>
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
              {siteContent.address.line1}
              <br />
              {siteContent.address.line2}
            </address>

            <div className={styles.schedule}>
              <h3 className={styles.detailTitle}>Funcionamento</h3>
              <p>{siteContent.restaurantHours.days}</p>
              <p>
                <time dateTime={siteContent.restaurantHours.opensAt}>
                  {siteContent.restaurantHours.opensAtLabel}
                </time> às{" "}
                <time dateTime={siteContent.restaurantHours.closesAt}>
                  {siteContent.restaurantHours.closesAtLabel}
                </time>
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
                  href={siteContent.contacts.generalWhatsApp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.contacts.generalWhatsApp.display}
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
                  href={siteContent.contacts.lunchboxWhatsApp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.contacts.lunchboxWhatsApp.display}
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
                  href={siteContent.contacts.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.contacts.instagram.handle}
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
                  href={siteContent.contacts.email.href}
                >
                  {siteContent.contacts.email.address}
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Eventos</span>
                <a
                  className={styles.contactLink}
                  href={siteContent.externalLinks.buffet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteContent.externalLinks.buffet.label}
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
          <p>
            © {currentYear} {siteContent.brand.primaryName}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
