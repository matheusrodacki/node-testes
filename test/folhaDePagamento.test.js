import { expect, test } from "@jest/globals";
import { somaHorasExtras, calculaDescontos } from "../index.js";

test("Deve retornar a soma das horas extras", () => {
  const esperado = 2500;
  const restornado = somaHorasExtras(2000, 500);

  expect(restornado).toBe(esperado);
});

test("Deve retornar o valor descontado", () => {
  const esperado = 2300;
  const restornado = calculaDescontos(2500, 200);

  expect(restornado).toBe(esperado);
});
