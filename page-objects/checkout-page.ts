import { Page } from "@playwright/test"
import { HelperBase } from "./helper-base"

export class CheckoutPage extends HelperBase{
    
    private readonly proceedCheckoutButton = "[data-testid='next-step-button']"
    private readonly createAccountButton = "button.checkout-login__box-button"

    constructor(page: Page) {
        super(page)
    }

    async proceed() {
        await this.clickElement(this.proceedCheckoutButton)
    }

    async  createAccount() {
        await this.clickElement(this.createAccountButton)
    }
}