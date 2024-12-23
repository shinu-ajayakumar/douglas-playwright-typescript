import { Page } from "@playwright/test";
import { HelperBase } from "./helper-base";

export class BillingPage extends HelperBase {

    private readonly firstNameInput = "input[name='billingAddress.firstName']"
    private readonly lastNameInput = "input[name='billingAddress.lastName']"
    private readonly streetNameInput = "input[name='billingAddress.streetName']"
    private readonly streetNumberInput = "input[name='billingAddress.streetNumber']"
    private readonly zipCodeInput = "input[name='billingAddress.zip']"
    private readonly cityInput = "input[name='billingAddress.city']"
    private readonly dobInput = "input[name='billingAddress.dateOfBirth']"
    private readonly emailInput = "input[data-testid='email-personal']"
    private readonly passwordInput = "input[name='billingAddress.password']"
    private readonly createNewAccountButton = "button.checkout-data-form__button"
    private readonly optionCreditCard = "div[data-testid='panel-creditCardworldpay_creditcard_dgl-DE']"
    private readonly acceptPaymentButton = "button.button.button__primary.button__normal.action__button"
    private readonly termsButton = "button.checkout-terms-submit__submit-button"
    private readonly cardNumberInput = "input[id='cardNumber']"
    private readonly cardHolderNameInput = "input[id='cardholderName']"
    private readonly expiryMonthInput = "input[id='expiryMonth']"
    private readonly expiryYearInput = "input[id='expiryYear']"
    private readonly securityCodeInput = "input[id='securityCode']"
    private readonly makePaymentButton = "input.btn-make-payment"
    private readonly paymentDetailsFrame = "iframe[name='wp-cl-world-pay-card-details-iframe']"

    constructor(page: Page) {
        super(page)
    }

    async enterFirstName(firstName: string) {
        await this.enterText(this.firstNameInput, firstName)
    }

    async enterLastName(lastName: string) {
        await this.enterText(this.lastNameInput, lastName)
    }

    async enterStreetName(streetName: string) {
        await this.enterText(this.streetNameInput, streetName)
    }

    async enterStreetNumber(streetNumber: string) {
        await this.enterText(this.streetNumberInput, streetNumber)
    }

    async enterZipCode(zip: string) {
        await this.enterText(this.zipCodeInput, zip)
    }

    async enterLocation(city: string) {
        await this.enterText(this.cityInput, city)
    }

    async enterDOB(dob: string) {
        await this.enterText(this.dobInput, dob)
    }

    async enterEmail(email: string) {
        await this.enterText(this.emailInput, email)
    }

    async enterPassword(password: string) {
        await this.enterText(this.passwordInput, password)
    }

    async createAccount() {
        await this.clickElement(this.createNewAccountButton)
    }

    async selectCreditCard() {
        await this.clickElement(this.optionCreditCard)
    }

    async acceptPayment() {
        await this.clickElement(this.acceptPaymentButton)
    }

    async acceptTerms(){
        await this.clickElement(this.termsButton)
    }

    async enterCardNumber(cardNumber: string){
        await this.enterTextInsideFrame(this.paymentDetailsFrame, this.cardNumberInput,cardNumber)
    }

    async enterCardHolderName(cardHolderName: string){
        await this.enterTextInsideFrame(this.paymentDetailsFrame, this.cardHolderNameInput,cardHolderName)
    }

    async enterExpiryMonth(expiryMonth: string){
        await this.enterTextInsideFrame(this.paymentDetailsFrame, this.expiryMonthInput,expiryMonth)
    }

    async enterExpiryYear(expiryYear: string){
        await this.enterTextInsideFrame(this.paymentDetailsFrame, this.expiryYearInput,expiryYear)
    }

    async enterSecurityCode(securityCode: string){
        await this.enterTextInsideFrame(this.paymentDetailsFrame, this.securityCodeInput,securityCode)
    }

    async makePayment(){
        await this.clickElementInsideFrame(this.paymentDetailsFrame,this.makePaymentButton)
    }
}