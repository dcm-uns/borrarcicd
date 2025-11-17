// @ts-check
import { test, expect } from '@playwright/test';

// Test del contador en App.jsx
test('contador: incrementa al hacer click', async ({ page }) => {
  // Ajusta la URL si tu servidor de Vite corre en otro puerto
  await page.goto('http://localhost:5173/');

  // Buscar el botón que muestra el contador
  const button = page.getByRole('button', { name: /count is \d+/i });

  // Debe empezar en 0
  await expect(button).toHaveText(/count is 0/i);

  // Hacer click y verificar que incrementa a 1
  await button.click();
  await expect(button).toHaveText(/count is 1/i);
});
