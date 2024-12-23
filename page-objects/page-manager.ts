import { Page } from "@playwright/test"
import { LandingPage } from "./landing-page"
import { SearchResultsPage } from "./search-results-page"
import { ProductDetailsPage } from "./product-details-page"
import { LoginOrRegisterPage } from "./login-register-page"
import { CheckoutPage } from "./checkout-page"
import { BillingPage } from "./billing-page"

export class PageManager {
    
    private readonly landingPage: LandingPage
    private readonly searchResultsPage: SearchResultsPage
    private readonly productDetailsPage: ProductDetailsPage
    private readonly loginOrRegisterPage: LoginOrRegisterPage
    private readonly checkoutPage: CheckoutPage
    private readonly billingPage: BillingPage

    constructor(page: Page) {
        this.landingPage = new LandingPage(page)
        this.searchResultsPage = new SearchResultsPage(page)
        this.productDetailsPage = new ProductDetailsPage(page)
        this.loginOrRegisterPage = new LoginOrRegisterPage(page)
        this.checkoutPage = new CheckoutPage(page)
        this.billingPage = new BillingPage(page)
    }

    onLanding() {
        return this.landingPage
    }

    onSearchResults() {
        return this.searchResultsPage
    }

    onProductDetails() {
        return this.productDetailsPage
    }

    loginOrRegister() {
        return this.loginOrRegisterPage
    }

    checkout(){
        return this.checkoutPage
    }

    billing(){
        return this.billingPage
    }

}