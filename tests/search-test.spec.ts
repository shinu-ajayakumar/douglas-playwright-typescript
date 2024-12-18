import { expect, test } from "@playwright/test"
import { LandingPage } from "../page-objects/landing-page"
import { SearchResultsPage } from "../page-objects/search-results-page"
import { ProductDetailsPage } from "../page-objects/product-details-page"

async function performSearch(page: any, searchKeyword: string) {
    const landingPage = new LandingPage(page);
    const searchResultsPage = new SearchResultsPage(page);

    await landingPage.goTo();
    await landingPage.acceptCookies();
    await landingPage.searchFor(searchKeyword);
    return searchResultsPage;
}

test("Search by keyword and verify search results", async ({ page }) => {
    const searchKeyword = "mobile";
    const searchResultsPage = await performSearch(page, searchKeyword);
    await searchResultsPage.verifySearchResultsFor(searchKeyword)
})

test("Search by keyword and verify cart count", async ({ page }) => {
    const searchKeyword = "watch";
    const searchResultsPage = await performSearch(page, searchKeyword);
    const productDetailsPage = new ProductDetailsPage(page);
    const landingPage = new LandingPage(page);

    await searchResultsPage.selectItemByIndex(1);
    await productDetailsPage.clickAddToCart();
    await landingPage.verifyCartCount(1);
})