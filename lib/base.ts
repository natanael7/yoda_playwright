import { Page } from "@playwright/test";

export async function waitClick(page: Page, selector: string) {
  await page.click(selector);
}

export async function waitWrite(page: Page, selector: string, value: string) {
  await page.fill(selector, value);
}

export async function waitRead(page: Page, selector: string) {
  return await page.textContent(selector);
}

export function styledSuccess(msg: string) {
  return `\x1b[32m${msg}\x1b[0m`; // Using ANSI escape codes for coloring
}

export function styledError(msg: string) {
  return `\x1b[31m${msg}\x1b[0m`;
}

export function styledWarning(msg: string) {
  return `\x1b[33m${msg}\x1b[0m`;
}
