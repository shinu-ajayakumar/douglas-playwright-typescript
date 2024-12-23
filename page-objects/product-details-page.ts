import { Page } from "@playwright/test"
import { HelperBase } from "./helper-base"

export class ProductDetailsPage extends HelperBase {

    private addToCartButton = "button[data-testid='add-to-cart-button']"
    private primaryAddToCartButton = "button.add-cart-modal__button--primary"

    constructor(page: Page) {
        super(page)
    }

    async clickAddToCart() {
        await this.clickElement(this.addToCartButton)
    }

    async proceedToCheckout() {
        await this.clickElement(this.primaryAddToCartButton)
    }
}