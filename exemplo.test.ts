import { expect, test } from "vitest";

function somaDoisNUmeros(a: number, b: number) {
  return a + b;
}

test("se soma dois numeros", () => {
  const result = somaDoisNUmeros(1, 1);

  expect(result).toBe(2);
});
