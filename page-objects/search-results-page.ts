import { expect, Page } from "@playwright/test"
import { HelperBase } from "./helper-base"

export class SearchResultsPage extends HelperBase{

    private readonly searchResults = "a[data-testid='image-link']"
    private readonly header = "span[data-testid='product-overview-title']"

    constructor(page: Page) {
        super(page)
    }

    /**
     * This method will click the nth result in the search results
     * @param index - should be the index of the item you want to click starts with 1
     */
    async selectItemByIndex(index: any) {
        await this.clickNthElement(this.searchResults, index)
    }

    async verifySearchResultsFor(search: string) {
        await expect(this.page.locator(this.header)).toHaveText(search)
    }
}