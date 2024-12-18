import { Page } from "@playwright/test"

export class LandingPage {

    private readonly page: Page
    private readonly baseUrl = "https://www.douglas.de/de"
    private readonly acceptCookieButton = "button[data-testid='uc-accept-all-button']"
    private readonly searchInput = "input[data-testid='typeAhead-input']"
    private readonly searchButton = "button[data-testid='typeAhead-search-button']"

    constructor(page: Page) {
        this.page = page
    }

    async goTo() {
        await this.page.goto(this.baseUrl)
    }

    async acceptCookies() {
        await this.page.locator(this.acceptCookieButton).click()
    }

    async searchFor(search: string) {
        await this.page.locator(this.searchInput).fill(search)
        await this.page.waitForLoadState()
    }

    async clickSearch() {
        await this.page.locator(this.searchButton).click()
        await this.page.waitForLoadState()
    }
}