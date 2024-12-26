import test from "@playwright/test"
import { PageManager } from "../page-objects/page-manager"

test.only("verify headers", async ({ page }) => {
    const searchKeyword = "mobile"
    const pm = new PageManager(page)

    await pm.onLanding().goTo()
    await pm.onLanding().acceptCookies()
    await pm.onLanding().verifyHeaders()
})