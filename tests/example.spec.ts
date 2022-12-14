import { test, expect } from '@playwright/test';

let url = "http://localhost:3000/"

test('h1 exist', async ({ page }) => {
  await page.goto(url)
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('cybershit.io');
})

test('files button exist', async ({ page }) => {
  await page.goto(url)
  const pageTitle = await page.locator('#files')
  await expect(pageTitle).toContainText('📁');
})

test('click button files ', async ({ page }) => {
  await page.goto(url)
  await page.click("#files")
  const pageSite = await page.locator('h1')
  await expect(pageSite).toContainText('Coding Cheats Sheets');
  await page.click("#files")
})