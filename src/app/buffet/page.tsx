import type { Metadata } from "next";
import Link from "next/link";
import { siteContent, siteRoutes } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Paladar Buffet | Festas e eventos",
  description:
    "Conheça o Paladar Buffet, serviço do ecossistema Paladar dedicado a festas, celebrações e eventos.",
};

export default function BuffetPage() {
  const { buffet } = siteContent.externalLinks;

  return (
    <main className={styles.main}>
      <header className={styles.hero} aria-labelledby="buffet-page-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Festas &amp; Eventos</p>
            <h1 id="buffet-page-title" className={styles.heroTitle}>
              O Paladar também faz parte das suas celebrações.
            </h1>
            <p className={styles.heroText}>
              A experiência do Paladar se estende a festas e eventos por meio
              do Paladar Buffet.
            </p>

            <div className={styles.heroActions}>
              <a
                className={`${styles.button} ${styles.buttonPrimary}`}
                href={buffet.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conhecer o Paladar Buffet
                <span className={styles.externalIcon} aria-hidden="true">
                  ↗
                </span>
                <span className={styles.visuallyHidden}>
                  {" "}(abre o site oficial em nova aba)
                </span>
              </a>
              <p>Você será direcionado ao site oficial do Paladar Buffet.</p>
            </div>
          </div>

          <div className={styles.brandStage} aria-hidden="true">
            <p className={styles.stageBrand}>{siteContent.brand.primaryName}</p>
            <p className={styles.stageService}>Buffet</p>
            <p className={styles.stageOccasion}>Festas &amp; Eventos</p>
          </div>
        </div>
      </header>

      <section
        className={`${styles.section} ${styles.introductionSection}`}
        aria-labelledby="introduction-title"
      >
        <div className={`${styles.container} ${styles.editorialGrid}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              {buffet.label}
            </p>
            <h2 id="introduction-title" className={styles.sectionTitle}>
              Uma frente dedicada a celebrar encontros.
            </h2>
          </div>

          <div className={styles.sectionCopy}>
            <p>
              O Paladar Buffet é o serviço do ecossistema Paladar voltado a
              festas, celebrações e eventos.
            </p>
            <p>
              As informações completas sobre o Buffet estão reunidas em seu
              próprio site oficial.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.connectionSection}`}
        aria-labelledby="connection-title"
      >
        <div className={styles.container}>
          <div className={styles.connectionIntroduction}>
            <p className={styles.eyebrow}>Uma mesma essência</p>
            <h2 id="connection-title" className={styles.sectionTitle}>
              Do restaurante para novos momentos à mesa.
            </h2>
            <p>
              O Restaurante Paladar e o Paladar Buffet compartilham uma relação
              construída em torno de encontros e gastronomia.
            </p>
          </div>

          <ul className={styles.valueList}>
            <li>
              <span aria-hidden="true">01</span>
              <h3>Tradição</h3>
              <p>Uma história familiar que conecta as duas marcas.</p>
            </li>
            <li>
              <span aria-hidden="true">02</span>
              <h3>Gastronomia</h3>
              <p>A comida como parte central de diferentes encontros.</p>
            </li>
            <li>
              <span aria-hidden="true">03</span>
              <h3>Cuidado</h3>
              <p>Uma experiência pensada para momentos de celebração.</p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.mediaSection}`}
        aria-labelledby="media-title"
      >
        <div className={`${styles.container} ${styles.mediaGrid}`}>
          <div className={styles.mediaComposition} aria-hidden="true">
            <p>Festas</p>
            <span>&amp;</span>
            <p>Eventos</p>
          </div>

          <div className={styles.mediaContent}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Paladar em outros encontros
            </p>
            <h2 id="media-title" className={styles.sectionTitle}>
              Uma conexão que vai além do restaurante.
            </h2>
            <p>
              Para conhecer o Paladar Buffet com mais detalhes, continue para
              o canal dedicado a festas e eventos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="official-site-title">
        <div className={`${styles.container} ${styles.finalCtaInner}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Site oficial
            </p>
            <h2 id="official-site-title">
              Conheça o Paladar Buffet por completo.
            </h2>
            <p>
              Acesse o site externo para consultar as informações do Buffet.
            </p>
          </div>

          <div className={styles.finalActions}>
            <a
              className={`${styles.button} ${styles.buttonDark}`}
              href={buffet.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conhecer o Paladar Buffet
              <span className={styles.externalIcon} aria-hidden="true">
                ↗
              </span>
              <span className={styles.visuallyHidden}>
                {" "}(abre o site oficial em nova aba)
              </span>
            </a>
            <Link
              className={`${styles.button} ${styles.buttonGhost}`}
              href={siteRoutes.home}
            >
              Voltar ao Restaurante
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
