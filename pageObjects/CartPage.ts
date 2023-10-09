import { Page } from "@playwright/test";
import dataTest from "../helpers/dataTest";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getCartProductTitle(): Promise<string | null> {
    return await this.page.textContent(dataTest("product-title"));
  }
}
