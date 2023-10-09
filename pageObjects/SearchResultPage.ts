import { Page } from "@playwright/test";
import dataTest from "../helpers/dataTest";

export class SearchResultPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getSearchTitle(): Promise<string | null> {
    return await this.page.textContent(
      dataTest("listing-summary") + " span span"
    );
  }

  async getProductTitle(): Promise<string | null> {
    return await this.page.textContent(dataTest("product-leaf-title"));
  }

  async getProductCount(): Promise<string> {
    return (
      (await this.page
        .locator(dataTest("result-count"))
        .getAttribute("data-value")) || "-1"
    );
  }
}
