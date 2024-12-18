import { test } from "@playwright/test"
import { LandingPage } from "../page-objects/landing-page"
import { SearchResultsPage } from "../page-objects/search-results-page"
import { ProductDetailsPage } from "../page-objects/product-details-page"

test.beforeEach(async ({ page }) => {

})

test("Search by keyword", async ({ page }) => {
    const landingPage = new LandingPage(page)
    const searchResultsPage = new SearchResultsPage(page)
    const productDetailsPage = new ProductDetailsPage(page)
    await landingPage.goTo()
    await landingPage.acceptCookies()
    await landingPage.searchFor("Watch")
    await searchResultsPage.selectItemByIndex(1)
    await productDetailsPage.clickAddToCart()
})