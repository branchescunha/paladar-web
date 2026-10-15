import test from "node:test";
import assert from "node:assert/strict";
import { siteLinks } from "./site-links.ts";

const expectedMessages = {
  general:
    "Olá! Vim pelo site do Paladar e gostaria de mais informações.",
  lunchboxes:
    "Olá! Vim pelo site do Paladar e gostaria de fazer um pedido de marmita.",
  light:
    "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Light.",
  traditional:
    "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Tradicional.",
  premiumMeats:
    "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Carnes Nobres.",
  vegan:
    "Olá! Vim pelo site do Paladar e gostaria de pedir a Marmita Vegana.",
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
    siteLinks.whatsApp.lunchboxes.options.light,
    "5561984901611",
    expectedMessages.light,
  );
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.options.tradicional,
    "5561984901611",
    expectedMessages.traditional,
  );
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.options["carnes-nobres"],
    "5561984901611",
    expectedMessages.premiumMeats,
  );
  assertWhatsAppLink(
    siteLinks.whatsApp.lunchboxes.options.vegana,
    "5561984901611",
    expectedMessages.vegan,
  );
});

test("uses the verified Google Maps place instead of a text search", () => {
  const url = new URL(siteLinks.googleMaps);

  assert.equal(url.hostname, "www.google.com");
  assert.match(url.pathname, /\/maps\/place\/Paladar\+Prime\+Restaurante/);
  assert.doesNotMatch(url.href, /maps\/search/);
  assert.match(url.href, /0x4f1e84f44717dc1a/);
});
