import test from "@playwright/test"
import { PageManager } from "../page-objects/page-manager"

test("verify landing page top menu items", async ({ page }) => {
    const searchKeyword = "mobile"
    const pm = new PageManager(page)

    await pm.onLanding().goTo()
    await pm.onLanding().acceptCookies()
    await pm.onLanding().verifyHeaders()
})