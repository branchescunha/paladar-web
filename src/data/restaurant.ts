export type ContentStatus = "confirmed" | "provisional";
export type CurrencyCode = "BRL";

export type Money = {
  amountInCents: number;
  currency: CurrencyCode;
  status: ContentStatus;
};

type DeliveryArea = {
  name: string;
  fee: Money;
};

type LunchboxOption = {
  id: string;
  name: string;
  composition: readonly string[];
  price: Money;
};

export const restaurantContent = {
  service: {
    mealService: "apenas almoço",
    formats: ["self-service", "marmita montada pelo cliente no peso"],
  },
  highlights: [
    "churrasco",
    "carnes Angus / cortes nobres",
    "saladas",
    "pratos quentes",
    "carnes, frangos, linguiças e peixes",
    "marmitas da casa",
  ],
  delivery: {
    hours: {
      opensAt: "11:30",
      closesAt: "14:00",
      opensAtLabel: "11h30",
      closesAtLabel: "14h",
    },
    areas: [
      {
        name: "Setor O",
        fee: {
          amountInCents: 500,
          currency: "BRL",
          status: "provisional",
        },
      },
      {
        name: "Ceilândia",
        fee: {
          amountInCents: 1000,
          currency: "BRL",
          status: "provisional",
        },
      },
    ] satisfies readonly DeliveryArea[],
  },
  benefits: {
    birthday: {
      audience: "aniversariante do dia",
      discountPercentage: 50,
      appliesTo: "somente o próprio prato",
    },
    uniformedPersonnel: {
      conditions: ["fardados", "em serviço"],
      offer: "prato à vontade",
      price: {
        amountInCents: 4000,
        currency: "BRL",
        status: "confirmed",
      } satisfies Money,
      eligibleGroups: [
        "polícia",
        "bombeiros",
        "Exército",
        "Marinha",
        "Aeronáutica",
        "agentes penitenciários",
      ],
    },
  },
  lunchboxes: {
    status: {
      names: "provisional",
      compositions: "provisional",
      prices: "provisional",
    },
    options: [
      {
        id: "light",
        name: "Light",
        composition: [
          "arroz",
          "feijão",
          "frango grelhado",
          "legumes",
          "salada",
        ],
        price: {
          amountInCents: 3000,
          currency: "BRL",
          status: "provisional",
        },
      },
      {
        id: "tradicional",
        name: "Tradicional",
        composition: [
          "arroz",
          "feijão",
          "farofa",
          "acompanhamento",
          "uma proteína selecionada",
        ],
        price: {
          amountInCents: 3500,
          currency: "BRL",
          status: "provisional",
        },
      },
      {
        id: "carnes-nobres",
        name: "Carnes Nobres",
        composition: [
          "arroz",
          "feijão",
          "acompanhamento",
          "uma opção de carne nobre",
        ],
        price: {
          amountInCents: 4500,
          currency: "BRL",
          status: "provisional",
        },
      },
      {
        id: "vegana",
        name: "Vegana",
        composition: [
          "arroz",
          "feijão",
          "legumes",
          "salada",
          "sem ingredientes de origem animal",
        ],
        price: {
          amountInCents: 3000,
          currency: "BRL",
          status: "provisional",
        },
      },
    ] satisfies readonly LunchboxOption[],
  },
  history: {
    foundation: {
      month: "junho",
      year: 1998,
      location: "Setor O, Ceilândia",
    },
    familyBusiness: true,
    founders: [
      "Mauri Alves da Cunha",
      "Marcilon Silva Cunha",
      "Mauri Anderson Silva Cunha",
    ],
    leadershipTransition: {
      period: "2001/2002",
      leaders: ["Mauri Anderson Silva Cunha", "Alane"],
      relationship: "casal",
      developments: [
        "novos investimentos",
        "melhorias",
        "crescimento da estrutura",
      ],
    },
    evolution: {
      developments: [
        "ampliação do espaço",
        "mais variedade",
        "melhorias na experiência",
      ],
      preservedValue: "essência familiar",
    },
    renovation: {
      year: 2022,
      developments: [
        "uma grande reforma",
        "fortalecimento do churrasco selecionado",
        "introdução e fortalecimento de carnes nobres e cortes Angus",
      ],
    },
    present: {
      locationRole: "parte da rotina de Ceilândia",
      service: "almoço todos os dias",
      continuity: "tradição familiar desde 1998",
    },
    legacy: "tradição familiar e presença em Ceilândia desde 1998",
  },
} as const;
