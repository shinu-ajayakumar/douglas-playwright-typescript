import { Page } from "@playwright/test"

/*export async function enterText(page: Page, element: string, search: string) {
    try {
        await this.page.waitForLoadState()
        await page.waitForSelector(element)
        await page.locator(element).fill(search);
    } catch (error) {
        console.error('Failed to fill text', error);
    }
}

export async function clickElement(page: Page, element: string) {
    try {
        await this.page.waitForLoadState()
        await page.waitForSelector(element)
        await page.locator(element).click()
    } catch (error) {
        console.error('Failed to click element', error);
    }
}

export async function clickElementByIndex(page: Page, element: string, index: number) {
    try {
        await this.page.waitForLoadState()
        await page.waitForSelector(element)
        await page.locator(element).nth(index + 1).click()
    } catch (error) {
        console.error('Failed to click element', error);
    }
}*/