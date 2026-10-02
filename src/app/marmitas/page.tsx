import type { Metadata } from "next";
import Link from "next/link";
import { restaurantContent, type Money } from "@/data/restaurant";
import { siteContent, siteRoutes } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Marmitas e delivery | Paladar",
  description:
    "Conheça as opções de marmitas do Paladar e consulte horário e taxas de delivery.",
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const generalOrderMessage =
  "Olá! Gostaria de fazer um pedido de marmita no Paladar.";

function formatMoney(money: Money) {
  return currencyFormatter.format(money.amountInCents / 100);
}

function getWhatsAppUrl(message: string) {
  return `${siteContent.contacts.lunchboxWhatsApp.href}?text=${encodeURIComponent(message)}`;
}

function getLunchboxOrderMessage(name: string) {
  return `Olá! Gostaria de pedir uma Marmita ${name} do Paladar.`;
}

export default function LunchboxesPage() {
  const { delivery, lunchboxes } = restaurantContent;
  const { lunchboxWhatsApp } = siteContent.contacts;
  const hasProvisionalLunchboxContent = Object.values(lunchboxes.status).some(
    (status) => status === "provisional",
  );

  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="lunchboxes-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Almoço para levar</p>
            <h1 id="lunchboxes-title" className={styles.heroTitle}>
              Marmitas do seu jeito.
            </h1>
            <p className={styles.heroText}>
              Monte sua marmita no buffet ou escolha uma proposta da casa para
              tornar o almoço mais prático.
            </p>

            <div className={styles.actions}>
              <a
                className={`${styles.button} ${styles.buttonPrimary}`}
                href={getWhatsAppUrl(generalOrderMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir marmita
                <span className={styles.visuallyHidden}>
                  {" "}(abre o WhatsApp em nova aba)
                </span>
              </a>
              <Link
                className={`${styles.button} ${styles.buttonSecondary}`}
                href={siteRoutes.menu}
              >
                Ver cardápio
              </Link>
            </div>
          </div>

          <dl className={styles.heroDetails}>
            <div>
              <dt>Restaurante</dt>
              <dd>{siteContent.restaurantHours.days}</dd>
              <dd>
                <time dateTime={siteContent.restaurantHours.opensAt}>
                  {siteContent.restaurantHours.opensAtLabel}
                </time>{" "}
                às{" "}
                <time dateTime={siteContent.restaurantHours.closesAt}>
                  {siteContent.restaurantHours.closesAtLabel}
                </time>
              </dd>
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
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.lightSection}`}
        aria-labelledby="formats-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntroduction}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Escolha como montar
            </p>
            <h2 id="formats-title">Duas formas de levar o Paladar.</h2>
          </div>

          <div className={styles.formatList}>
            <article>
              <p className={styles.formatNumber} aria-hidden="true">
                01
              </p>
              <h3>Monte no peso</h3>
              <p>
                Use o buffet para montar sua própria marmita, do mesmo jeito
                que monta o prato no atendimento presencial.
              </p>
            </article>
            <article>
              <p className={styles.formatNumber} aria-hidden="true">
                02
              </p>
              <h3>Marmitas da Casa</h3>
              <p>
                Escolha entre quatro propostas provisórias pensadas para
                facilitar o pedido.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.houseSection}`}
        aria-labelledby="house-lunchboxes-title"
      >
        <div className={styles.container}>
          <div className={styles.houseIntroduction}>
            <div>
              <p className={styles.eyebrow}>Marmitas da Casa</p>
              <h2 id="house-lunchboxes-title">
                Quatro propostas para o seu almoço.
              </h2>
            </div>
            {hasProvisionalLunchboxContent && (
              <p className={styles.provisionalNotice}>
                Nomes, composições e preços são provisórios e ainda podem ser
                alterados.
              </p>
            )}
          </div>

          <ol className={styles.lunchboxGrid}>
            {lunchboxes.options.map((lunchbox, index) => (
              <li key={lunchbox.id}>
                <article className={styles.lunchboxCard}>
                  <div className={styles.cardHeading}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>
                      {lunchboxes.status.names === "provisional" ||
                      lunchboxes.status.compositions === "provisional"
                        ? "Proposta provisória"
                        : "Marmita da Casa"}
                    </p>
                  </div>
                  <h3>{lunchbox.name}</h3>
                  <p className={styles.composition}>
                    {lunchbox.composition.join(", ")}.
                  </p>
                  <div className={styles.cardFooter}>
                    <p>
                      <span>
                        {lunchbox.price.status === "provisional"
                          ? "Preço provisório"
                          : "Preço"}
                      </span>
                      <strong>{formatMoney(lunchbox.price)}</strong>
                    </p>
                    <a
                      className={styles.orderLink}
                      href={getWhatsAppUrl(
                        getLunchboxOrderMessage(lunchbox.name),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pedir esta opção
                      <span className={styles.visuallyHidden}>
                        {" "}(abre o WhatsApp em nova aba)
                      </span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.deliverySection}`}
        aria-labelledby="delivery-title"
      >
        <div className={`${styles.container} ${styles.deliveryGrid}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Delivery
            </p>
            <h2 id="delivery-title">Seu almoço pode ir até você.</h2>
            <p className={styles.deliveryText}>
              Pedidos pelo WhatsApp durante o horário de delivery informado.
            </p>
          </div>

          <div className={styles.deliveryDetails}>
            <dl>
              <div>
                <dt>Horário</dt>
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
              {delivery.areas.map((area) => (
                <div key={area.name}>
                  <dt>{area.name}</dt>
                  <dd>
                    {formatMoney(area.fee)}
                    <span>
                      {area.fee.status === "provisional"
                        ? "Taxa provisória"
                        : "Taxa de entrega"}
                    </span>
                  </dd>
                </div>
              ))}
              <div>
                <dt>WhatsApp</dt>
                <dd>{lunchboxWhatsApp.display}</dd>
              </div>
            </dl>

            <a
              className={`${styles.button} ${styles.buttonDark}`}
              href={getWhatsAppUrl(generalOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer pedido pelo WhatsApp
              <span className={styles.visuallyHidden}>
                {" "}(abre o WhatsApp em nova aba)
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.processSection}`}
        aria-labelledby="process-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntroduction}>
            <p className={styles.eyebrow}>Como pedir</p>
            <h2 id="process-title">Um caminho simples até o almoço.</h2>
          </div>

          <ol className={styles.processList}>
            <li>
              <span>01</span>
              <h3>Escolha a marmita</h3>
              <p>Monte no peso ou selecione uma proposta da casa.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Fale pelo WhatsApp</h3>
              <p>Envie sua escolha para o número específico de marmitas.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Combine o pedido</h3>
              <p>Confirme os detalhes diretamente com a equipe do Paladar.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={`${styles.container} ${styles.finalCtaInner}`}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Almoço com praticidade
            </p>
            <h2 id="final-cta-title">Escolha sua marmita e fale com a gente.</h2>
          </div>
          <a
            className={`${styles.button} ${styles.buttonDark}`}
            href={getWhatsAppUrl(generalOrderMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir pelo WhatsApp
            <span className={styles.visuallyHidden}>
              {" "}(abre o WhatsApp em nova aba)
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
