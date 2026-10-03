import type { Metadata } from "next";
import Link from "next/link";
import { restaurantContent } from "@/data/restaurant";
import { siteRoutes } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nossa história | Paladar",
  description:
    "Conheça a história do Paladar, restaurante familiar presente em Ceilândia desde 1998.",
};

const listFormatter = new Intl.ListFormat("pt-BR", {
  style: "long",
  type: "conjunction",
});

export default function AboutPage() {
  const { history } = restaurantContent;
  const founderNames = listFormatter.format(history.founders);
  const leaderNames = listFormatter.format(history.leadershipTransition.leaders);
  const leadershipDevelopments = listFormatter.format(
    history.leadershipTransition.developments,
  );
  const renovationDevelopments = listFormatter.format(
    history.renovation.developments,
  );

  return (
    <main className={styles.main}>
      <header className={styles.hero} aria-labelledby="about-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Desde {history.foundation.year}</p>
            <h1 id="about-title" className={styles.heroTitle}>
              Uma história de família, trabalho e Ceilândia.
            </h1>
            <p className={styles.heroText}>
              O Paladar nasceu no Setor O e cresceu em Ceilândia, preservando
              a essência familiar em cada nova fase.
            </p>
          </div>

          <p className={styles.heroYear} aria-hidden="true">
            {history.foundation.year}
          </p>
        </div>
      </header>

      <section
        className={`${styles.section} ${styles.originSection}`}
        aria-labelledby="origin-title"
      >
        <div className={`${styles.container} ${styles.originGrid}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Nossa origem
            </p>
            <h2 id="origin-title" className={styles.sectionTitle}>
              Uma mesa que começou em família.
            </h2>
          </div>

          <div className={styles.originContent}>
            <p>
              Em {history.foundation.month} de {history.foundation.year}, a
              Churrascaria Paladar abriu as portas no{" "}
              {history.foundation.location} como um negócio familiar simples.
            </p>
            <p>
              A história começou com {founderNames}, unindo gerações em torno
              do mesmo trabalho.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.journeySection}`}
        aria-labelledby="journey-title"
      >
        <div className={`${styles.container} ${styles.journeyGrid}`}>
          <div className={styles.journeyIntroduction}>
            <p className={styles.eyebrow}>Nossa trajetória</p>
            <h2 id="journey-title" className={styles.sectionTitle}>
              O tempo trouxe mudanças. A essência permaneceu.
            </h2>
          </div>

          <ol className={styles.milestoneList}>
            <li>
              <p className={styles.milestonePeriod}>
                <time dateTime={String(history.foundation.year)}>
                  {history.foundation.year}
                </time>
              </p>
              <div className={styles.milestoneContent}>
                <h3>O começo</h3>
                <p>
                  O Paladar nasce no {history.foundation.location} pelas mãos
                  de {founderNames}.
                </p>
              </div>
            </li>

            <li>
              <p className={styles.milestonePeriod}>
                {history.leadershipTransition.period}
              </p>
              <div className={styles.milestoneContent}>
                <h3>Uma nova fase</h3>
                <p>
                  O {history.leadershipTransition.relationship} {leaderNames}
                  {" "}
                  assume integralmente a condução do restaurante, iniciando{
                  " "}
                  {leadershipDevelopments}.
                </p>
              </div>
            </li>

            <li>
              <p className={styles.milestonePeriod}>
                <time dateTime={String(history.renovation.year)}>
                  {history.renovation.year}
                </time>
              </p>
              <div className={styles.milestoneContent}>
                <h3>Renovar para seguir em frente</h3>
                <p>
                  O restaurante passa por {renovationDevelopments}.
                </p>
              </div>
            </li>

            <li>
              <p className={styles.milestonePeriod}>Hoje</p>
              <div className={styles.milestoneContent}>
                <h3>Presença que continua</h3>
                <p>
                  O Paladar é {history.present.locationRole}, servindo{
                  " "}
                  {history.present.service} e mantendo sua{
                  " "}
                  {history.present.continuity}.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.evolutionSection}`}
        aria-labelledby="evolution-title"
      >
        <div className={`${styles.container} ${styles.evolutionGrid}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Tradição que evolui
            </p>
            <h2 id="evolution-title" className={styles.sectionTitle}>
              Crescer sem deixar de ser Paladar.
            </h2>
          </div>

          <div className={styles.evolutionContent}>
            <p>
              Ao longo dos anos, o restaurante avançou com novos sabores e uma
              experiência cada vez mais completa, preservando sua{
              " "}
              {history.evolution.preservedValue}.
            </p>
            <ul>
              {history.evolution.developments.map((development) => (
                <li key={development}>{development}</li>
              ))}
              {history.renovation.developments.slice(1).map((development) => (
                <li key={development}>{development}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.placeSection}`}
        aria-labelledby="place-title"
      >
        <div className={`${styles.container} ${styles.placeGrid}`}>
          <div className={styles.placeContent}>
            <p className={styles.eyebrow}>Nosso lugar</p>
            <h2 id="place-title" className={styles.sectionTitle}>
              Uma história vivida no Setor O.
            </h2>
            <p>
              Foi em Ceilândia que o Paladar criou raízes, ampliou seu espaço e
              se tornou {history.present.locationRole}.
            </p>
          </div>
          <p className={styles.placeWord} aria-hidden="true">
            Ceilândia
          </p>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="visit-title">
        <div className={`${styles.container} ${styles.finalCtaInner}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Desde 1998
            </p>
            <h2 id="visit-title">Essa história continua à mesa.</h2>
          </div>
          <div className={styles.actions}>
            <Link
              className={`${styles.button} ${styles.buttonDark}`}
              href={siteRoutes.menu}
            >
              Ver cardápio
            </Link>
            <Link
              className={`${styles.button} ${styles.buttonGhost}`}
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
