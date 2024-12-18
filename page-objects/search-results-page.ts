import { Page } from "@playwright/test"

export class SearchResultsPage {

    private readonly page: Page
    private readonly searchResults = "a[data-testid='image-link']"

    constructor(page: Page) {
        this.page = page
    }

    /**
     * This method will click the nth result in the search results
     * @param index - should be the index of the item you want to click starts with 1
     */
    async selectItemByIndex(index: number) {
        await this.page.locator(this.searchResults).nth(index + 1).click()
    }
}