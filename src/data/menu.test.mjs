import test from "node:test";
import assert from "node:assert/strict";
import { beverageCategories } from "./menu.ts";

function getCategory(id) {
  const category = beverageCategories.find((item) => item.id === id);

  assert.ok(category, `Missing category: ${id}`);
  return category;
}

function getPresentation(option) {
  return [option.label, option.size].filter(Boolean).join(" ");
}

test("standardizes every natural juice as 300 ml cup and 750 ml pitcher", () => {
  const naturalJuices = getCategory("sucos-naturais");

  for (const item of naturalJuices.items) {
    assert.deepEqual(
      item.options.map(getPresentation),
      ["Copo 300 ml", "Jarra 750 ml"],
      item.name,
    );
  }
});

test("standardizes every pulp juice as 300 ml cup and 750 ml pitcher", () => {
  const pulpJuices = getCategory("sucos-de-polpa");

  for (const item of pulpJuices.items) {
    assert.deepEqual(
      item.options.map(getPresentation),
      ["Copo 300 ml", "Jarra 750 ml"],
      item.name,
    );
  }
});

test("uses professional unit formatting for every known beverage size", () => {
  const sizePattern = /^(?:(?:PET|KS|Lata|Long Neck) )?\d+(?:,\d+)? (?:ml|L)$/;

  for (const category of beverageCategories) {
    for (const item of category.items) {
      for (const option of item.options) {
        if (option.size) {
          assert.match(option.size, sizePattern, `${item.name}: ${option.size}`);
        }
      }
    }
  }
});

test("keeps products with unknown presentation explicit instead of inventing one", () => {
  const softDrinks = getCategory("refrigerantes");
  const unknownPresentations = softDrinks.items
    .filter((item) => item.options.some((option) => !getPresentation(option)))
    .map((item) => item.name);

  assert.deepEqual(unknownPresentations, [
    "Schweppes Citrus",
    "Schweppes Tônica",
    "Água sem gás",
    "Água com gás",
    "Shot de limão",
    "H2O limão/limoneto",
  ]);
});
