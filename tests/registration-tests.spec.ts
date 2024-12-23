import test from "@playwright/test"
import { PageManager } from "../page-objects/page-manager"
import { getRandomDOB, getRandomEmail, getRandomName, getRandomPassword } from "../helpers/random-helper"

test("New user registration", async ({ page }) => {
    const pm = new PageManager(page)

    await pm.onLanding().goTo()
    await pm.onLanding().acceptCookies()
    await pm.onLanding().clickUserProfile()
    await pm.loginOrRegister().enterFirstName(getRandomName(6))
    await pm.loginOrRegister().enterLastName(getRandomName(6))
    await pm.loginOrRegister().enterDOB(getRandomDOB())
    await pm.loginOrRegister().enterEmail(getRandomEmail())
    await pm.loginOrRegister().enterPassword(getRandomPassword(10))
    await pm.loginOrRegister().createAccount()
    await pm.onLanding().verifyLoginSuccess()
})