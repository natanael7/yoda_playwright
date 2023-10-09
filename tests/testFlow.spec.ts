import { test, expect } from "@playwright/test";
import { HomePage } from "../pageObjects/HomePage";
import { SearchResultPage } from "../pageObjects/SearchResultPage";
import { CartPage } from "../pageObjects/CartPage";

const rawUrl = "https://www.lego.com";
const languageDomain = "/en-us";
const url = rawUrl + languageDomain;
const keyword = "Yoda";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.acceptAgeGateAndCookies();
});

test.describe("Yoda Tests", () => {
  test("should navigate, accept cookies, and search for Yoda", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    const cartPage = new CartPage(page);

    await homePage.searchForKeyword(keyword);

    const searchTitle = await searchResultPage.getSearchTitle();
    expect(searchTitle).toContain(keyword);
    
    const productCount = await searchResultPage.getProductCount();
    expect(parseInt(productCount)).toBeGreaterThan(1);

    await homePage.addFirstProductToCart();

    const productTitle = await searchResultPage.getProductTitle();
    await homePage.navigateToCart();
    const cartProductTitle = await cartPage.getCartProductTitle();

    expect(cartProductTitle).toBe(productTitle);
  });
});
