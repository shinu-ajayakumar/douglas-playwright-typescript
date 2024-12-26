import { Page } from "@playwright/test"
import { error } from "console"

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
            console.log(`Entered text '${text}' in element: ${element}`);
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error(`Error while entering text '${text}' to element: ${element}`, error)
            throw error
        }
    }

    async enterTextInsideFrame(frame: string, element: string, text: string): Promise<void> {
        try {
            const frameElement = await this.page.frameLocator(frame)
            await frameElement.locator(element).first().waitFor({ state: 'visible' })
            await frameElement.locator(element).fill(text)
            console.log(`Entered text '${text}' in element: ${element}`);
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            console.error(`Error while entering text '${text}' to element: ${element}`, error)
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

    async verifyElementsText(elements: any, expectedTexts: any) {
        for (let i = 0; i < elements.length; i++) {
            const headerText = await elements[i].textContent();

            if (headerText === null) {
                console.log(`Header at index ${i} is missing text content.`);
                continue;
            }

            const expectedHeader = expectedTexts[i]?.trim();
            if (expectedHeader && headerText.trim() !== expectedHeader) {
                console.error(`Header doesn't matches, Expected : "${expectedHeader.trim()}" , Actual : "${headerText.trim()}"`, error);
                throw error
            } else {
                console.log(`Header matches, Expected : "${expectedHeader.trim()}" , Actual : "${headerText.trim()}"`);
            }
        }
    }
}