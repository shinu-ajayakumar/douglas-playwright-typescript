import { Page } from "@playwright/test"

export class HelperBase {

    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async waitForSeconds(seconds: number) {
        await this.page.waitForTimeout(1000 * seconds)
       // await this.page.pause()
    }

    async clickElement(element: string): Promise<void> {
        try {
            await this.page.locator(element).first().waitFor({ state: 'visible' })
            await this.page.locator(element).first().click()
            console.log(`Clicked element: ${element}`);
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error(`Error while clicking element: ${element}`, error)
            throw error
        }
    }

    async clickElementInsideFrame(frame: string, element: string): Promise<void> {
        try {
            const frameElement = await this.page.frameLocator(frame)
            await frameElement.locator(element).first().waitFor({ state: 'visible' })
            await frameElement.locator(element).first().click()
            console.log(`Clicked element: ${element}`);
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error(`Error while clicking element: ${element}`, error)
            throw error
        }
    }


    async clickNthElement(element: string, n: number): Promise<void> {
        try {
            await this.page.locator(element).first().waitFor({ state: 'visible' })
            await this.page.locator(element).nth(n).click()
            console.log(`Clicked element: ${element}`);
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error(`Error while clicking element: ${element}`, error)
            throw error
        }
    }

    async enterText(element: string, text: string): Promise<void> {
        try {
            await this.page.locator(element).first().waitFor({ state: 'visible' })
            await this.page.locator(element).fill(text)
            console.log(`Entered text in element: ${element}`);
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error(`Error while entering text to element: ${element}`, error)
            throw error
        }
    }

    async enterTextInsideFrame(frame: string, element: string, text: string): Promise<void> {
        try {
            const frameElement = await this.page.frameLocator(frame)
            await frameElement.locator(element).first().waitFor({ state: 'visible' })
            await frameElement.locator(element).fill(text)
            console.log(`Entered text in element: ${element}`);
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error(`Error while entering text to element: ${element}`, error)
            throw error
        }
    }

    async verifyDisplayed(element: string): Promise<void> {
        try {
            await this.page.locator(element).first().waitFor({ state: 'visible' })
            console.log(`Element is visible: ${element}`);
        } catch (error) {
            console.error(`Element not displayed: ${element}`, error)
            throw error
        }
    }
}