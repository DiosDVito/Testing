import { test, expect } from '@playwright/test';

test('browse Mercado Libre', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx/');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('nintendo');
  await page.getByRole('option', { name: 'nintendo switch' }).click();
  await page.getByRole('link', { name: 'Consola Nintendo Switch Lite - Edición Hyrule Dorado' }).click();
  await page.getByRole('button', { name: 'Cantidad: 1 unidad (+10' }).click();
  await page.getByRole('button', { name: '5 unidades' }).click();
  await page.getByRole('link', { name: 'Mercado Libre México - Donde' }).click();
  await page.getByRole('link', { name: 'Tarjeta De Memoria Sandisk' }).click();
});

//No pude hacer que funcionara.