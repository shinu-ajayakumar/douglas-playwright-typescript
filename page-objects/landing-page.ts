import { expect, Page } from "@playwright/test"
import { HelperBase } from "./helper-base"

export class LandingPage extends HelperBase {

    private readonly baseUrl = "https://www.douglas.de/de"
    private readonly acceptCookieButton = "button[data-testid='uc-accept-all-button']"
    private readonly searchInput = "input[data-testid='typeAhead-input']"
    private readonly searchButton = "button[data-testid='typeAhead-search-button']"
    private readonly cartCount = "[class='number-badge'] span"

    constructor(page: Page) {
        super(page)
    }

    async goTo() {
        await this.page.goto(this.baseUrl)
    }

    async acceptCookies() {
        await this.page.locator(this.acceptCookieButton).click()
    }

    async searchFor(search: string) {
        await this.page.locator(this.searchInput).fill(search)
        await this.clickSearch()
    }

    async clickSearch() {
        await this.page.locator(this.searchButton).click()
    }

    async verifyCartCount(count: number) {
        await expect(this.page.locator(this.cartCount)).toHaveText(String(count))
    }
}