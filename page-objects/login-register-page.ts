import { Page } from "@playwright/test";
import { HelperBase } from "./helper-base";

export class LoginOrRegisterPage extends HelperBase {
    
    private readonly firstNameInput = "input[name='firstName']"
    private readonly lastNameInput = "input[name='lastName']"
    private readonly dobInput = "input[name='dateOfBirth']"
    private readonly emailInput = "input[name='email'][type='mail']"
    private readonly passwordInput = "div.registration__password input[name='password']"
    private readonly createAccountButon = "button.registration__button"

    constructor(page: Page) {
        super(page)
    }

    async enterFirstName(firstName: string) {
        await this.enterText(this.firstNameInput, firstName)
    }

    async enterLastName(lastName: string) {
        await this.enterText(this.lastNameInput, lastName)
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
        await this.clickElement(this.createAccountButon)
    }

}