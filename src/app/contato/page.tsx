import type { Metadata } from "next";
import Link from "next/link";
import { restaurantContent } from "@/data/restaurant";
import { siteContent, siteRoutes } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contato e localização | Paladar",
  description:
    "Consulte o endereço, horários, contatos e informações de funcionamento do Restaurante Paladar em Ceilândia.",
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function addWhatsAppMessage(href: string, message: string) {
  return `${href}?text=${encodeURIComponent(message)}`;
}

export default function ContactPage() {
  const { address, contacts, externalLinks, restaurantHours } = siteContent;
  const { benefits, delivery, service } = restaurantContent;
  const fullAddress = `${address.line1}, ${address.line2}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const generalWhatsAppHref = addWhatsAppMessage(
    contacts.generalWhatsApp.href,
    "Olá! Gostaria de falar com o Paladar.",
  );
  const lunchboxWhatsAppHref = addWhatsAppMessage(
    contacts.lunchboxWhatsApp.href,
    "Olá! Gostaria de fazer um pedido de marmita.",
  );
  const uniformedPrice = currencyFormatter.format(
    benefits.uniformedPersonnel.price.amountInCents / 100,
  );

  return (
    <main className={styles.main}>
      <header className={styles.hero} aria-labelledby="contact-page-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Venha nos visitar</p>
            <h1 id="contact-page-title" className={styles.heroTitle}>
              Seu almoço no Paladar começa por aqui.
            </h1>
            <p className={styles.heroText}>
              Encontre nosso endereço, escolha o contato certo e confira as
              informações para planejar sua visita.
            </p>

            <div className={styles.actions}>
              <a
                className={`${styles.button} ${styles.buttonPrimary}`}
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no Google Maps
                <span aria-hidden="true">↗</span>
                <span className={styles.visuallyHidden}>
                  {" "}(abre em nova aba)
                </span>
              </a>
              <a
                className={`${styles.button} ${styles.buttonOutline}`}
                href={generalWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com o Paladar
                <span className={styles.visuallyHidden}>
                  {" "}(abre o WhatsApp em nova aba)
                </span>
              </a>
            </div>
          </div>

          <div className={styles.schedulePanel}>
            <p className={styles.scheduleLabel}>Funcionamento</p>
            <p className={styles.scheduleDays}>{restaurantHours.days}</p>
            <p className={styles.scheduleTime}>
              <time dateTime={restaurantHours.opensAt}>
                {restaurantHours.opensAtLabel}
              </time>
              <span>às</span>
              <time dateTime={restaurantHours.closesAt}>
                {restaurantHours.closesAtLabel}
              </time>
            </p>
            <p className={styles.scheduleNote}>{service.mealService}</p>
          </div>
        </div>
      </header>

      <section
        className={`${styles.section} ${styles.informationSection}`}
        aria-labelledby="information-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntroduction}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Informações principais
            </p>
            <h2 id="information-title" className={styles.sectionTitle}>
              Tudo o que você precisa antes de chegar.
            </h2>
          </div>

          <dl className={styles.informationList}>
            <div className={styles.informationItem}>
              <dt>Endereço</dt>
              <dd>
                <address>
                  {address.line1}
                  <br />
                  {address.line2}
                </address>
              </dd>
            </div>
            <div className={styles.informationItem}>
              <dt>Restaurante</dt>
              <dd>
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
                <p>{service.mealService}</p>
              </dd>
            </div>
            <div className={styles.informationItem}>
              <dt>Delivery</dt>
              <dd>
                <p>
                  <time dateTime={delivery.hours.opensAt}>
                    {delivery.hours.opensAtLabel}
                  </time>{" "}
                  às{" "}
                  <time dateTime={delivery.hours.closesAt}>
                    {delivery.hours.closesAtLabel}
                  </time>
                </p>
              </dd>
            </div>
            <div className={styles.informationItem}>
              <dt>Contato geral</dt>
              <dd>
                <a href={generalWhatsAppHref} target="_blank" rel="noopener noreferrer">
                  {contacts.generalWhatsApp.display}
                  <span className={styles.visuallyHidden}>
                    {" "}(abre o WhatsApp em nova aba)
                  </span>
                </a>
              </dd>
            </div>
            <div className={styles.informationItem}>
              <dt>Marmitas e delivery</dt>
              <dd>
                <a href={lunchboxWhatsAppHref} target="_blank" rel="noopener noreferrer">
                  {contacts.lunchboxWhatsApp.display}
                  <span className={styles.visuallyHidden}>
                    {" "}(abre o WhatsApp em nova aba)
                  </span>
                </a>
              </dd>
            </div>
            <div className={styles.informationItem}>
              <dt>Redes e e-mail</dt>
              <dd className={styles.contactLinks}>
                <a
                  href={contacts.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contacts.instagram.handle}
                  <span className={styles.visuallyHidden}>
                    {" "}(abre o Instagram em nova aba)
                  </span>
                </a>
                <a href={contacts.email.href}>{contacts.email.address}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.locationSection}`}
        aria-labelledby="location-title"
      >
        <div className={`${styles.container} ${styles.locationGrid}`}>
          <p className={styles.locationWord} aria-hidden="true">
            Setor O
          </p>
          <div className={styles.locationContent}>
            <p className={styles.eyebrow}>Onde estamos</p>
            <h2 id="location-title" className={styles.sectionTitle}>
              Paladar no coração de Ceilândia.
            </h2>
            <address>
              {address.line1}
              <br />
              {address.line2}
            </address>
            <a
              className={`${styles.button} ${styles.buttonPrimary}`}
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
              <span aria-hidden="true">↗</span>
              <span className={styles.visuallyHidden}>
                {" "}(abre em nova aba)
              </span>
            </a>
            <p className={styles.externalNote}>
              O endereço será aberto no site externo do Google Maps.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.contactSection}`}
        aria-labelledby="contact-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntroduction}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Fale com o Paladar
            </p>
            <h2 id="contact-title" className={styles.sectionTitle}>
              Um contato para cada necessidade.
            </h2>
          </div>

          <div className={styles.contactOptions}>
            <article>
              <p className={styles.optionNumber} aria-hidden="true">
                01
              </p>
              <h3>Contato geral</h3>
              <p>
                Para falar diretamente com o restaurante sobre informações
                gerais.
              </p>
              <a
                className={styles.textLink}
                href={generalWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contacts.generalWhatsApp.display}
                <span aria-hidden="true">↗</span>
                <span className={styles.visuallyHidden}>
                  {" "}(abre o WhatsApp em nova aba)
                </span>
              </a>
            </article>

            <article>
              <p className={styles.optionNumber} aria-hidden="true">
                02
              </p>
              <h3>Marmitas e delivery</h3>
              <p>
                Para fazer seu pedido durante o horário de delivery do
                Paladar.
              </p>
              <a
                className={styles.textLink}
                href={lunchboxWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contacts.lunchboxWhatsApp.display}
                <span aria-hidden="true">↗</span>
                <span className={styles.visuallyHidden}>
                  {" "}(abre o WhatsApp em nova aba)
                </span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.benefitsSection}`}
        aria-labelledby="benefits-title"
      >
        <div className={styles.container}>
          <div className={styles.benefitsIntroduction}>
            <p className={styles.eyebrow}>Benefícios confirmados</p>
            <h2 id="benefits-title" className={styles.sectionTitle}>
              Condições especiais, apresentadas com clareza.
            </h2>
          </div>

          <div className={styles.benefitList}>
            <article>
              <p className={styles.benefitValue}>
                {benefits.birthday.discountPercentage}%
              </p>
              <div>
                <h3>Aniversariante do dia</h3>
                <p>
                  Desconto de {benefits.birthday.discountPercentage}% aplicado{" "}
                  {benefits.birthday.appliesTo}.
                </p>
              </div>
            </article>

            <article>
              <p className={styles.benefitValue}>{uniformedPrice}</p>
              <div>
                <h3>Militares fardados e em serviço</h3>
                <p>
                  {benefits.uniformedPersonnel.offer} por {uniformedPrice} para
                  profissionais {benefits.uniformedPersonnel.conditions.join(" e ")}.
                </p>
                <p className={styles.eligibleLabel}>Públicos informados:</p>
                <ul className={styles.eligibleGroups}>
                  {benefits.uniformedPersonnel.eligibleGroups.map((group) => (
                    <li key={group}>{group}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.faqSection}`}
        aria-labelledby="faq-title"
      >
        <div className={`${styles.container} ${styles.faqGrid}`}>
          <div className={styles.faqIntroduction}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Perguntas frequentes
            </p>
            <h2 id="faq-title" className={styles.sectionTitle}>
              Respostas diretas para planejar seu almoço.
            </h2>
          </div>

          <div className={styles.faqList}>
            <details>
              <summary>Quais são os dias e horários de funcionamento?</summary>
              <p>
                O Paladar funciona {restaurantHours.days.toLowerCase()}, das{" "}
                {restaurantHours.opensAtLabel} às {restaurantHours.closesAtLabel}.
              </p>
            </details>
            <details>
              <summary>Onde fica o Paladar?</summary>
              <p>
                {address.line1}, {address.line2}.
              </p>
            </details>
            <details>
              <summary>O restaurante serve jantar?</summary>
              <p>Não. O Paladar funciona apenas no almoço.</p>
            </details>
            <details>
              <summary>O Paladar trabalha com marmitas?</summary>
              <p>
                Sim. Conheça as opções e informações disponíveis na página de{" "}
                <Link href={siteRoutes.lunchboxes}>Marmitas &amp; Delivery</Link>.
              </p>
            </details>
            <details>
              <summary>Há delivery de marmitas?</summary>
              <p>
                Sim. O delivery funciona das {delivery.hours.opensAtLabel} às{" "}
                {delivery.hours.closesAtLabel}. Os pedidos são feitos pelo
                WhatsApp de marmitas.
              </p>
            </details>
            <details>
              <summary>Como funciona o benefício para aniversariantes?</summary>
              <p>
                O aniversariante do dia recebe {benefits.birthday.discountPercentage}%
                de desconto {benefits.birthday.appliesTo}.
              </p>
            </details>
            <details>
              <summary>Como funciona o valor especial para militares?</summary>
              <p>
                Profissionais fardados e em serviço dos públicos informados têm{" "}
                {benefits.uniformedPersonnel.offer} por {uniformedPrice}.
              </p>
            </details>
            <details>
              <summary>O Paladar realiza festas e eventos?</summary>
              <p>
                O Paladar Buffet é a frente dedicada a festas e eventos. Saiba
                mais na <Link href={siteRoutes.buffet}>página do Buffet</Link> ou
                acesse o{" "}
                <a
                  href={externalLinks.buffet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  site oficial do Paladar Buffet
                  <span className={styles.visuallyHidden}>
                    {" "}(abre em nova aba)
                  </span>
                </a>
                .
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={`${styles.container} ${styles.finalCtaInner}`}>
          <div>
            <p className={styles.eyebrow}>Seu próximo almoço</p>
            <h2 id="final-cta-title">Escolha o caminho e venha ao Paladar.</h2>
          </div>
          <div className={styles.actions}>
            <a
              className={`${styles.button} ${styles.buttonPrimary}`}
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar
              <span className={styles.visuallyHidden}>
                {" "}(abre o Google Maps em nova aba)
              </span>
            </a>
            <a
              className={`${styles.button} ${styles.buttonOutline}`}
              href={generalWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp geral
              <span className={styles.visuallyHidden}>
                {" "}(abre o WhatsApp em nova aba)
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
