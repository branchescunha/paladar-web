import type { Money } from "@/data/restaurant";

export type MenuPriceOption = {
  label?: string;
  size?: string;
  price: Money;
};

export type MenuItem = {
  name: string;
  options: readonly MenuPriceOption[];
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: readonly MenuItem[];
};

export type DessertCategory = {
  id: string;
  name: string;
  availability: string;
};

const price = (amountInCents: number): Money => ({
  amountInCents,
  currency: "BRL",
  status: "confirmed",
});

const cupAndPitcher = (
  cupAmountInCents: number,
  pitcherAmountInCents: number,
  sizes?: { cup: string; pitcher: string },
): readonly MenuPriceOption[] => [
  {
    label: "Copo",
    size: sizes?.cup,
    price: price(cupAmountInCents),
  },
  {
    label: "Jarra",
    size: sizes?.pitcher,
    price: price(pitcherAmountInCents),
  },
];

const singleOption = (
  amountInCents: number,
  size?: string,
): readonly MenuPriceOption[] => [
  {
    size,
    price: price(amountInCents),
  },
];

const lemonShot: MenuItem = {
  name: "Shot de limão",
  options: singleOption(200),
};

export const beverageCategories = [
  {
    id: "sucos-naturais",
    name: "Sucos naturais",
    description: "Preparados na hora, em opções de copo e jarra.",
    items: [
      {
        name: "Laranja",
        options: cupAndPitcher(1000, 2000, {
          cup: "300ml",
          pitcher: "750ml",
        }),
      },
      { name: "Limão", options: cupAndPitcher(1000, 2000) },
      { name: "Limonada Suíça", options: cupAndPitcher(2000, 3000) },
      {
        name: "Abacaxi / Abacaxi com hortelã",
        options: cupAndPitcher(1000, 2000),
      },
      {
        name: "Laranja com beterraba",
        options: cupAndPitcher(1300, 2300),
      },
    ],
  },
  {
    id: "sucos-de-polpa",
    name: "Sucos de polpa",
    description: "Sabores disponíveis em copo e jarra.",
    items: [
      { name: "Uva", options: cupAndPitcher(1000, 2000) },
      { name: "Caju", options: cupAndPitcher(1000, 2000) },
      { name: "Cajá", options: cupAndPitcher(1000, 2000) },
      { name: "Manga", options: cupAndPitcher(1000, 2000) },
      { name: "Goiaba", options: cupAndPitcher(1000, 2000) },
      { name: "Acerola", options: cupAndPitcher(1000, 2000) },
      { name: "Graviola", options: cupAndPitcher(1000, 2000) },
      { name: "Morango", options: cupAndPitcher(1000, 2000) },
      { name: "Cupuaçu", options: cupAndPitcher(1000, 2000) },
      { name: "Maracujá", options: cupAndPitcher(1500, 2800) },
    ],
  },
  {
    id: "refrigerantes",
    name: "Refrigerantes",
    description: "Opções individuais e para compartilhar.",
    items: [
      { name: "Coca-Cola", options: singleOption(450, "PET 200ml") },
      { name: "Coca-Cola", options: singleOption(600, "KS 290ml") },
      { name: "Coca-Cola", options: singleOption(650, "lata 310ml") },
      { name: "Coca-Cola", options: singleOption(900, "600ml") },
      { name: "Coca-Cola", options: singleOption(1000, "1L") },
      { name: "Coca-Cola", options: singleOption(1200, "1,5L") },
      { name: "Coca-Cola", options: singleOption(1400, "2L") },
      { name: "Fanta sabores", options: singleOption(1400, "2L") },
      { name: "Sprite", options: singleOption(600, "KS 290ml") },
      { name: "Fanta sabores", options: singleOption(650, "310ml") },
      { name: "Schweppes Citrus", options: singleOption(700) },
      { name: "Schweppes Tônica", options: singleOption(750) },
      { name: "Água sem gás", options: singleOption(400) },
      { name: "Água com gás", options: singleOption(450) },
      lemonShot,
      { name: "Guaraná", options: singleOption(650, "lata") },
      { name: "Guaraná", options: singleOption(900, "600ml") },
      { name: "Guaraná", options: singleOption(1000, "1L") },
      { name: "Guaraná", options: singleOption(1200, "1,5L") },
      { name: "Guaraná", options: singleOption(1400, "2L") },
      { name: "H2O limão/limoneto", options: singleOption(750) },
    ],
  },
  {
    id: "cervejas",
    name: "Cervejas",
    description: "Rótulos em diferentes tamanhos.",
    items: [
      { name: "Brahma Duplo Malte", options: singleOption(600, "350ml") },
      { name: "Brahma Chopp", options: singleOption(600, "350ml") },
      { name: "Antarctica", options: singleOption(600, "350ml") },
      { name: "Budweiser", options: singleOption(600, "350ml") },
      { name: "Original", options: singleOption(500, "269ml") },
      { name: "Amstel", options: singleOption(600, "350ml") },
      { name: "Amstel Long Neck", options: singleOption(500, "355ml") },
      { name: "Amstel Ultra", options: singleOption(700, "275ml") },
      { name: "Amstel", options: singleOption(1400, "600ml") },
      {
        name: "Heineken Long Neck",
        options: singleOption(900, "330ml"),
      },
      { name: "Heineken", options: singleOption(1800, "600ml") },
      lemonShot,
    ],
  },
] as const satisfies readonly MenuCategory[];

export const dessertCategories = [
  {
    id: "doces-e-guloseimas",
    name: "Doces e guloseimas",
    availability:
      "A seleção muda ao longo do dia. Consulte a equipe para conhecer as opções disponíveis.",
  },
  {
    id: "picoles",
    name: "Picolés",
    availability:
      "Sabores e disponibilidade podem variar. Consulte a equipe antes de escolher.",
  },
  {
    id: "cortesias-da-casa",
    name: "Cortesias da casa",
    availability:
      "As cortesias preparadas pela casa podem variar conforme o dia.",
  },
] as const satisfies readonly DessertCategory[];
