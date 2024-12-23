import test from "@playwright/test"
import { PageManager } from "../page-objects/page-manager"
import { CountryCode, getRandomDOB, getRandomEmail, getRandomName, getRandomNumber, getRandomPassword, getRandomZipCode } from "../helpers/random-helper"

test("Checkout as new user", async ({ page }) => {
    const searchKeyword = "watch"
    const pm = new PageManager(page)

    await pm.onLanding().goTo()
    await pm.onLanding().acceptCookies()
    await pm.onLanding().searchFor(searchKeyword)
    await pm.onSearchResults().selectItemByIndex(getRandomNumber(1,10))
    await pm.onProductDetails().clickAddToCart()
    await pm.onProductDetails().proceedToCheckout()
    await pm.checkout().proceed()
    await pm.checkout().createAccount()
    await pm.billing().enterFirstName(getRandomName(6))
    await pm.billing().enterLastName(getRandomName(6))
    await pm.billing().enterStreetName(getRandomName(6))
    await pm.billing().enterStreetNumber(getRandomNumber(1,5))
    await pm.billing().enterZipCode(getRandomZipCode(CountryCode.GERMANY))
    await pm.billing().enterLocation("Hardenbergpl")
    await pm.billing().enterDOB(getRandomDOB())
    await pm.billing().enterEmail(getRandomEmail())
    await pm.billing().enterPassword(getRandomPassword(10))
    await pm.billing().createAccount()
    await pm.billing().selectCreditCard()
    await pm.billing().acceptPayment()
    await pm.billing().acceptTerms()
    await pm.billing().enterCardNumber("1234567890123")
    await pm.billing().enterCardHolderName("Test user")
    await pm.billing().enterExpiryMonth("10")
    await pm.billing().enterExpiryYear("26")
    await pm.billing().enterSecurityCode("123")
    await pm.billing().makePayment()
})