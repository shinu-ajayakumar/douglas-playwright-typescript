import { Page } from "@playwright/test"
import { LandingPage } from "./landing-page";
import { SearchResultsPage } from "./search-results-page";
import { ProductDetailsPage } from "./product-details-page"

export class PageManager {
    private readonly page: Page
    private readonly landingPage: LandingPage
    private readonly searchResultsPage: SearchResultsPage
    private readonly productDetailsPage: ProductDetailsPage

    constructor(page: Page) {
        this.page = page
        this.landingPage = new LandingPage(page);
        this.searchResultsPage = new SearchResultsPage(page);
        this.productDetailsPage = new ProductDetailsPage(page)
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

}