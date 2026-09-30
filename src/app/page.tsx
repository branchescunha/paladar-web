import Link from "next/link";
import { restaurantContent } from "@/data/restaurant";
import { siteContent, siteRoutes } from "@/data/site";
import styles from "./page.module.css";

const [selfService, customLunchbox] = restaurantContent.service.formats;
const [
  barbecue,
  premiumCuts,
  salads,
  hotDishes,
  proteins,
  houseLunchboxes,
] = restaurantContent.highlights;

export default function Home() {
  const { restaurantHours } = siteContent;
  const { delivery, history } = restaurantContent;

  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              Restaurante em Ceilândia desde {history.foundation.year}
            </p>
            <h1 id="hero-title" className={styles.heroTitle}>
              Tradição à mesa, todos os dias.
            </h1>
            <p className={styles.heroText}>
              {selfService}, {barbecue} e variedade para um almoço completo no
              Setor O.
            </p>

            <div className={styles.actions}>
              <Link
                className={`${styles.button} ${styles.buttonPrimary}`}
                href={siteRoutes.menu}
              >
                Ver cardápio
              </Link>
              <Link
                className={`${styles.button} ${styles.buttonSecondary}`}
                href={siteRoutes.lunchboxes}
              >
                Conhecer marmitas
              </Link>
            </div>

            <div className={styles.heroSchedule}>
              <span>{restaurantHours.days}</span>
              <p>
                <time dateTime={restaurantHours.opensAt}>
                  {restaurantHours.opensAtLabel}
                </time>{" "}
                às{" "}
                <time dateTime={restaurantHours.closesAt}>
                  {restaurantHours.closesAtLabel}
                </time>
              </p>
            </div>
          </div>

          <div className={styles.heroPanel} aria-label="Destaques do Paladar">
            <p className={styles.heroPanelLabel}>Desde</p>
            <p className={styles.heroYear}>{history.foundation.year}</p>
            <ul className={styles.heroHighlights}>
              <li>{selfService}</li>
              <li>{barbecue}</li>
              <li>{premiumCuts}</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.lightSection}`}
        aria-labelledby="self-service-title"
      >
        <div className={`${styles.container} ${styles.editorialGrid}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Nosso almoço
            </p>
            <h2 id="self-service-title" className={styles.sectionTitle}>
              Variedade para montar o prato do seu jeito.
            </h2>
          </div>

          <div className={styles.sectionCopy}>
            <p>
              O buffet reúne opções para uma experiência presencial completa,
              com almoço servido todos os dias.
            </p>
            <p className={styles.serviceNote}>
              {restaurantContent.service.mealService}
            </p>
          </div>
        </div>

        <ul className={`${styles.container} ${styles.featureList}`}>
          <li>{salads}</li>
          <li>{hotDishes}</li>
          <li>{proteins}</li>
        </ul>
      </section>

      <section
        className={`${styles.section} ${styles.grillSection}`}
        aria-labelledby="grill-title"
      >
        <div className={`${styles.container} ${styles.grillGrid}`}>
          <div className={styles.grillStatement} aria-hidden="true">
            Brasa
          </div>
          <div className={styles.grillContent}>
            <p className={styles.eyebrow}>Churrasco</p>
            <h2 id="grill-title" className={styles.sectionTitle}>
              Da brasa aos cortes nobres.
            </h2>
            <p>
              O {barbecue} ocupa lugar de destaque no almoço, com {premiumCuts}{" "}
              entre as opções do Paladar.
            </p>
            <ul className={styles.inlineHighlights}>
              <li>{barbecue}</li>
              <li>{premiumCuts}</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.lunchboxSection}`}
        aria-labelledby="lunchbox-title"
      >
        <div className={`${styles.container} ${styles.lunchboxGrid}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Marmitas
            </p>
            <h2 id="lunchbox-title" className={styles.sectionTitle}>
              O almoço do Paladar para levar.
            </h2>
            <p className={styles.lunchboxIntro}>
              Duas maneiras de levar o almoço do Paladar com praticidade.
            </p>
          </div>

          <div className={styles.lunchboxDetails}>
            <dl className={styles.definitionList}>
              <div>
                <dt>Monte como preferir</dt>
                <dd>{customLunchbox}</dd>
              </div>
              <div>
                <dt>Praticidade</dt>
                <dd>{houseLunchboxes}</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>
                  <time dateTime={delivery.hours.opensAt}>
                    {delivery.hours.opensAtLabel}
                  </time>{" "}
                  às{" "}
                  <time dateTime={delivery.hours.closesAt}>
                    {delivery.hours.closesAtLabel}
                  </time>
                </dd>
              </div>
            </dl>

            <Link
              className={`${styles.button} ${styles.buttonDark}`}
              href={siteRoutes.lunchboxes}
            >
              Ver opções de marmitas
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.storySection}`}
        aria-labelledby="story-title"
      >
        <div className={`${styles.container} ${styles.storyGrid}`}>
          <p className={styles.storyYear}>{history.foundation.year}</p>
          <div className={styles.storyContent}>
            <p className={styles.eyebrow}>Nossa história</p>
            <h2 id="story-title" className={styles.sectionTitle}>
              Uma história de família construída em Ceilândia.
            </h2>
            <p>
              Fundado em {history.foundation.location}, o Paladar mantém sua{" "}
              {history.legacy}.
            </p>
            <Link className={styles.textLink} href={siteRoutes.about}>
              Conhecer nossa história
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.spaceSection}`}
        aria-labelledby="space-title"
      >
        <div className={`${styles.container} ${styles.spaceGrid}`}>
          <div className={styles.spaceContent}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Nosso espaço
            </p>
            <h2 id="space-title" className={styles.sectionTitle}>
              Um ponto de encontro para o almoço no Setor O.
            </h2>
            <p>
              A experiência do Paladar acontece presencialmente em Ceilândia,
              com {selfService} e {barbecue} todos os dias.
            </p>
          </div>
          <p className={styles.spaceWord} aria-hidden="true">
            Ceilândia
          </p>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.buffetSection}`}
        aria-labelledby="buffet-title"
      >
        <div className={`${styles.container} ${styles.buffetGrid}`}>
          <div>
            <p className={styles.eyebrow}>Paladar Buffet</p>
            <h2 id="buffet-title" className={styles.sectionTitle}>
              Festas e eventos têm um Paladar próprio.
            </h2>
          </div>
          <div className={styles.sectionCopy}>
            <p>
              O Paladar Buffet é o serviço separado para festas e eventos, com
              site próprio.
            </p>
            <a
              className={`${styles.button} ${styles.buttonOutline}`}
              href={siteContent.externalLinks.buffet.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conhecer o Paladar Buffet
              <span className={styles.visuallyHidden}> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.locationSection}`}
        aria-labelledby="location-title"
      >
        <div className={`${styles.container} ${styles.locationGrid}`}>
          <div>
            <p className={styles.eyebrow}>Onde estamos</p>
            <h2 id="location-title" className={styles.sectionTitle}>
              Almoço todos os dias em Ceilândia.
            </h2>
          </div>

          <div className={styles.locationDetails}>
            <div>
              <h3>Endereço</h3>
              <address>
                {siteContent.address.line1}
                <br />
                {siteContent.address.line2}
              </address>
            </div>
            <div>
              <h3>Funcionamento</h3>
              <p>{restaurantHours.days}</p>
              <p>
                <time dateTime={restaurantHours.opensAt}>
                  {restaurantHours.opensAtLabel}
                </time>{" "}
                às{" "}
                <time dateTime={restaurantHours.closesAt}>
                  {restaurantHours.closesAtLabel}
                </time>
              </p>
            </div>
            <Link
              className={`${styles.button} ${styles.buttonSecondary}`}
              href={siteRoutes.contact}
            >
              Ver contato e localização
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={`${styles.container} ${styles.finalCtaInner}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Seu próximo almoço
            </p>
            <h2 id="final-cta-title" className={styles.sectionTitle}>
              Conheça o que o Paladar prepara para você.
            </h2>
          </div>
          <div className={styles.actions}>
            <Link
              className={`${styles.button} ${styles.buttonDark}`}
              href={siteRoutes.menu}
            >
              Acessar cardápio
            </Link>
            <Link
              className={`${styles.button} ${styles.buttonGhostDark}`}
              href={siteRoutes.contact}
            >
              Como chegar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
