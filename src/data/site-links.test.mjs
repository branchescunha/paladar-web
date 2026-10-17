import test from "node:test";
import assert from "node:assert/strict";
import { siteLinks } from "./site-links.ts";

const expectedMessages = {
  general:
    "Olá! Vim pelo site do Paladar e gostaria de mais informações.",
  lunchboxes:
    "Olá! Vi as marmitas no site do Paladar e gostaria de fazer um pedido.",
  fit:
    "Olá! Vi pelo site do Paladar e gostaria de pedir a marmita Fit de R$ 32,00.",
  daily:
    "Olá! Vi pelo site do Paladar e gostaria de pedir a Marmita do Dia de R$ 35,00.",
  barbecue:
    "Olá! Vi pelo site do Paladar e gostaria de pedir a marmita Churrasco de R$ 42,00.",
  premiumBarbecue:
    "Olá! Vi pelo site do Paladar e gostaria de pedir a marmita Churrasco Premium de R$ 52,00.",
};

function assertWhatsAppLink(href, number, message) {
  const url = new URL(href);

  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, `/${number}`);
  assert.equal(url.searchParams.get("text"), message);
}

test("centralizes the general WhatsApp destination and exact message", () => {
  assertWhatsAppLink(
    siteLinks.whatsApp.general,
    "5561984163455",
    expectedMessages.general,
  );
});

test("centralizes the generic lunchbox destination and exact message", () => {
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.general,
    "5561984901611",
    expectedMessages.lunchboxes,
  );
});

test("centralizes every individual lunchbox message", () => {
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.options.fit,
    "5561984901611",
    expectedMessages.fit,
  );
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.options["marmita-do-dia"],
    "5561984901611",
    expectedMessages.daily,
  );
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.options.churrasco,
    "5561984901611",
    expectedMessages.barbecue,
  );
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.options["churrasco-premium"],
    "5561984901611",
    expectedMessages.premiumBarbecue,
  );
});

test("uses the verified Google Maps place instead of a text search", () => {
  const url = new URL(siteLinks.googleMaps);

  assert.equal(url.hostname, "www.google.com");
  assert.match(url.pathname, /\/maps\/place\/Paladar\+Prime\+Restaurante/);
  assert.doesNotMatch(url.href, /maps\/search/);
  assert.match(url.href, /0x4f1e84f44717dc1a/);
});
