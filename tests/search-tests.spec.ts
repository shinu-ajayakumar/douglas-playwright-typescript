import { test } from "@playwright/test"
import { PageManager } from "../page-objects/page-manager"
import { getRandomNumber } from "../helpers/random-helper"

test("Search by keyword and verify search results", async ({ page }) => {
    const searchKeyword = "mobile"
    const pm = new PageManager(page)

    await pm.onLanding().goTo()
    await pm.onLanding().acceptCookies()
    await pm.onLanding().searchFor(searchKeyword)
    await pm.onSearchResults().verifySearchResultsFor(searchKeyword)
})

test("Search by keyword and verify cart count", async ({ page }) => {
    const searchKeyword = "watch"
    const pm = new PageManager(page)

    await pm.onLanding().goTo()
    await pm.onLanding().acceptCookies()
    await pm.onLanding().searchFor(searchKeyword)

    await pm.onSearchResults().selectItemByIndex(getRandomNumber(5,10))
    await pm.onProductDetails().clickAddToCart()
    await pm.onLanding().verifyCartCount(1)
})