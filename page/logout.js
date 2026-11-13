class logout{
    constructor(page)
    {
        this.page=page
        this.logoutlink = page.locator('#logout2')

    }
    async logoutbutton()
    {
       await this.logoutlink.click()
       return this
    }
    
}
module.exports = logout