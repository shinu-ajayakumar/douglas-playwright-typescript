import { test } from "@playwright/test"
import { PageManager } from "../page-objects/page-manager";

test("Search by keyword and verify search results", async ({ page }) => {
    const searchKeyword = "mobile";
    const pm = new PageManager(page)

    await pm.onLanding().goTo();
    await pm.onLanding().acceptCookies();
    await pm.onLanding().searchFor(searchKeyword);
    await pm.onSearchResults().verifySearchResultsFor(searchKeyword)
})

test("Search by keyword and verify cart count", async ({ page }) => {
    const searchKeyword = "watch";
    const pm = new PageManager(page)

    await pm.onLanding().goTo();
    await pm.onLanding().acceptCookies();
    await pm.onLanding().searchFor(searchKeyword);

    await pm.onSearchResults().selectItemByIndex(1);
    await pm.onProductDetails().clickAddToCart();
    await pm.onLanding().verifyCartCount(1);
})