import { Page } from "@playwright/test";
import dataTest from "../helpers/dataTest";

export class HomePage {
  readonly page: Page;
  url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = "https://www.lego.com/en-us";
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async acceptAgeGateAndCookies() {
    await this.page.click(dataTest("age-gate-grown-up-cta"));
    await this.page.click(dataTest("cookie-accept-all"));
  }

  async searchForKeyword(keyword: string) {
    await this.page.click(dataTest("search-input-button"));
    await this.page.fill(dataTest("search-input"), keyword);
    await this.page.press(dataTest("search-input"), "Enter");
  }

  async addFirstProductToCart() {
    await this.page.click(dataTest("add-to-cart-skroll-cta"));
    await this.page.click(dataTest("modal-close"));
  }

  async navigateToCart() {
    await this.page.click(dataTest("util-bar-cart"));
  }
}
