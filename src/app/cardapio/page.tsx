import type { Metadata } from "next";
import {
  beverageCategories,
  dessertCategories,
  type MenuPriceOption,
} from "@/data/menu";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cardápio | Paladar",
  description: "Consulte as bebidas e sobremesas disponíveis no Paladar.",
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function formatPrice(option: MenuPriceOption) {
  return currencyFormatter.format(option.price.amountInCents / 100);
}

function getOptionLabel(option: MenuPriceOption) {
  return [option.label, option.size].filter(Boolean).join(" ");
}

export default function MenuPage() {
  return (
    <main className={styles.main}>
      <header className={styles.intro} aria-labelledby="menu-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>Almoço no Paladar</p>
          <h1 id="menu-title" className={styles.title}>
            Cardápio
          </h1>
          <p className={styles.lead}>
            Consulte nossas opções de bebidas e a seleção de sobremesas para
            acompanhar seu almoço.
          </p>
          <p className={styles.availabilityNotice}>
            A disponibilidade de itens e sabores pode variar ao longo do dia.
          </p>
        </div>
      </header>

      <nav className={styles.categoryNavigation} aria-label="Categorias do cardápio">
        <ul className={styles.container}>
          {beverageCategories.map((category) => (
            <li key={category.id}>
              <a href={`#${category.id}`}>{category.name}</a>
            </li>
          ))}
          <li>
            <a href="#sobremesas">Sobremesas</a>
          </li>
        </ul>
      </nav>

      <section
        className={`${styles.section} ${styles.beveragesSection}`}
        aria-labelledby="beverages-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntroduction}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
              Para acompanhar
            </p>
            <h2 id="beverages-title">Bebidas</h2>
          </div>

          <div className={styles.categories}>
            {beverageCategories.map((category) => (
              <article
                key={category.id}
                id={category.id}
                className={styles.category}
                aria-labelledby={`${category.id}-title`}
              >
                <div className={styles.categoryHeading}>
                  <h3 id={`${category.id}-title`}>{category.name}</h3>
                  <p>{category.description}</p>
                </div>

                <ul className={styles.itemList}>
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={`${category.id}-${item.name}-${itemIndex}`}
                      className={styles.menuItem}
                    >
                      <h4>{item.name}</h4>
                      <dl className={styles.optionList}>
                        {item.options.map((option, optionIndex) => {
                          const optionLabel = getOptionLabel(option);

                          return (
                            <div key={`${optionLabel}-${optionIndex}`}>
                              <dt
                                className={
                                  optionLabel ? undefined : styles.visuallyHidden
                                }
                              >
                                {optionLabel || "Preço"}
                              </dt>
                              <dd>{formatPrice(option)}</dd>
                            </div>
                          );
                        })}
                      </dl>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobremesas"
        className={`${styles.section} ${styles.dessertsSection}`}
        aria-labelledby="desserts-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntroduction}>
            <p className={styles.eyebrow}>Depois do almoço</p>
            <h2 id="desserts-title">Sobremesas</h2>
            <p>
              A seleção é atualizada conforme a disponibilidade. Consulte a
              equipe para saber o que está sendo servido hoje.
            </p>
          </div>

          <ul className={styles.dessertList}>
            {dessertCategories.map((category) => (
              <li key={category.id} id={category.id}>
                <h3>{category.name}</h3>
                <p>{category.availability}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
