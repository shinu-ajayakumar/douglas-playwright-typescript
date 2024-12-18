import { Page } from "@playwright/test"

export class ProductDetailsPage {

    private readonly page: Page
    private addToCartButton = "button[data-testid='add-to-cart-button']"
    private primaryAddToCartButton = "button.add-cart-modal__button--primary"

    constructor(page: Page) {
        this.page = page
    }

    async clickAddToCart() {
        await this.page.locator(this.addToCartButton).click()
    }
}