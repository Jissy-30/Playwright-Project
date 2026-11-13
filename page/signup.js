class signup{
    constructor(page)
    {
        this.page=page
        this.signuplink = page.locator('#signin2')
        this.usernamefield = page.locator('#sign-username')
        this.passwordfield = page.locator('#sign-password')
        this.clicksignuplink = page.getByRole('button', { name: 'Sign up' })
        this.closelink = page.locator('#signInModal .btn-secondary')


    }
    async acessurl()
    {
        await this.page.goto('https://www.demoblaze.com')
        return this
    }
    async signupbutton()
    {
       await this.signuplink.click() 
       return this
    }
    async createusername(username)
    {
       await this.usernamefield.fill(username)
       return this
    }
    async createpassword(password)
    {
       await this.passwordfield.fill(password)
       return this
    }
    async clicksignupbutton()
    {
       await this.clicksignuplink.click() 
       return this
    }
    async clickclosebutton()
    {
       await this.closelink.click()
       return this
    }
}
module.exports = signup