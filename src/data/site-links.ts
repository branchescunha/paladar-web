type HttpsUrl = `https://${string}`;

const whatsAppNumbers = {
  general: "5561984163455",
  lunchboxes: "5561984901611",
} as const;

export const whatsAppMessages = {
  general: "Olá! Vim pelo site do Paladar e gostaria de mais informações.",
  lunchboxes: {
    general:
      "Olá! Vim pelo site do Paladar e gostaria de fazer um pedido de marmita.",
    options: {
      light:
        "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Light.",
      tradicional:
        "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Tradicional.",
      "carnes-nobres":
        "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Carnes Nobres.",
      vegana:
        "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Vegana.",
    },
  },
} as const;

export function buildWhatsAppUrl(number: string, message: string): HttpsUrl {
  const searchParams = new URLSearchParams({ text: message });

  return `https://wa.me/${number}?${searchParams.toString()}`;
}

export const siteLinks = {
  whatsApp: {
    general: buildWhatsAppUrl(
      whatsAppNumbers.general,
      whatsAppMessages.general,
    ),
    lunchboxes: {
      general: buildWhatsAppUrl(
        whatsAppNumbers.lunchboxes,
        whatsAppMessages.lunchboxes.general,
      ),
      options: {
        light: buildWhatsAppUrl(
          whatsAppNumbers.lunchboxes,
          whatsAppMessages.lunchboxes.options.light,
        ),
        tradicional: buildWhatsAppUrl(
          whatsAppNumbers.lunchboxes,
          whatsAppMessages.lunchboxes.options.tradicional,
        ),
        "carnes-nobres": buildWhatsAppUrl(
          whatsAppNumbers.lunchboxes,
          whatsAppMessages.lunchboxes.options["carnes-nobres"],
        ),
        vegana: buildWhatsAppUrl(
          whatsAppNumbers.lunchboxes,
          whatsAppMessages.lunchboxes.options.vegana,
        ),
      },
    },
  },
  googleMaps:
    "https://www.google.com/maps/place/Paladar+Prime+Restaurante/@-15.7948093,-48.1262076,17z/data=!4m6!3m5!1s0x935bcb841f49f055:0x4f1e84f44717dc1a!8m2!3d-15.7948093!4d-48.1262076!16s%2Fg%2F1q62g64kj" satisfies HttpsUrl,
} as const;
