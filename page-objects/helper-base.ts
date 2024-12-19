import { Page } from "@playwright/test"

export class HelperBase {
    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async clickElement(element: string) {
        try {
            await this.page.locator(element).first().waitFor({ state: 'visible' });
            await this.page.locator(element).first().click();
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error('Error while clicking element:', error);
            throw error;
        }
    }


    async clickNthElement(element: string, n: number) {
        try {
            await this.page.locator(element).first().waitFor({ state: 'visible' });
            await this.page.locator(element).nth(n).click()
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error('Error while clicking element:', error);
            throw error;
        }
    }

    async enterText(element: string, text: string) {
        try {
            await this.page.locator(element).first().waitFor({ state: 'visible' });
            await this.page.locator(element).fill(text)
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error('Error while clicking element:', error);
            throw error;
        }
    }
}