const purchase = require("./purchase")

class login{
    constructor(page)
    {
        this.page=page
        this.loginlink = page.locator('#login2')
        this.enterusernamefield = page.locator('#loginusername')
        this.enterpasswordfield = page.locator('#loginpassword')
        this.clickloginlink = page.getByRole('button', { name: 'Log in' })

    }
    async acessurl()
    {
        await this.page.goto('https://www.demoblaze.com')
        return this
    }
    async loginbutton()
    {
       await this.loginlink.click()
       return this
    }
    async enterusername(username)
    {
       await this.enterusernamefield.fill(username)
       return this
    }
    async enterpassword(password)
    {
       await this.enterpasswordfield.fill(password)
       return this
    }
    async clickloginbutton()
    {
       await this.clickloginlink.click()
       return new purchase(this.page)
    }

}
module.exports = login