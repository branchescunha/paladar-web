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
    contentStatus: "provisional",
    compositionStatus: "pending-confirmation",
    priceStatus: "pending-confirmation",
    names: ["Light", "Tradicional", "Picanha / Carnes Nobres", "Vegana"],
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
    laterLeadership: ["Mauri Anderson Silva Cunha", "Alane"],
    renovation: {
      year: 2022,
      developments: [
        "introdução e fortalecimento de carnes nobres e cortes Angus",
      ],
    },
    legacy: "tradição familiar e presença em Ceilândia desde 1998",
  },
} as const;
