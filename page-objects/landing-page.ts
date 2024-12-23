import { expect, Page } from "@playwright/test"
import { HelperBase } from "./helper-base"

export class LandingPage extends HelperBase {

    private readonly acceptCookieButton = "button[data-testid='uc-accept-all-button']"
    private readonly searchInput = "input[data-testid='typeAhead-input']"
    private readonly searchButton = "button[data-testid='typeAhead-search-button']"
    private readonly cartCount = "[class='number-badge'] span"
    private readonly loggedOutProfileicon = "[data-testid='account-flyout-profile-icon']"
    private readonly loggedInProfileIcon = "[data-testid='account-flyout-logged-in-profile-icon']"

    constructor(page: Page) {
        super(page)
    }

    async goTo() {
        await this.page.goto("/")
    }

    async acceptCookies() {
        await this.clickElement(this.acceptCookieButton)
    }

    async searchFor(search: string) {
        await this.enterText(this.searchInput, search)
        await this.clickSearch()
    }

    async clickSearch() {
        await this.clickElement(this.searchButton)
    }

    async verifyCartCount(count: number) {
        await expect(this.page.locator(this.cartCount)).toHaveText(String(count))
    }

    async clickUserProfile() {
        await this.clickElement(this.loggedOutProfileicon)
    }

    async verifyLoginSuccess() {
        await this.verifyDisplayed(this.loggedInProfileIcon)
    }
}