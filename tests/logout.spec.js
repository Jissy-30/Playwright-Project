const{test,expect}=require('@playwright/test')
const login = require('../page/login')
const dataset = require('../utils/validcredential.json')
const logout = require('../page/logout')
test('TC10 logout @login', async({page})=>
{
    let lob = new login(page)
    await lob.acessurl()
    await lob.loginbutton()
    await lob.enterusername(dataset.Username)
    await lob.enterpassword(dataset.Password)
    await lob.clickloginbutton()
   let lgobj = new logout(page)
   await lgobj.logoutbutton()
   await expect(page.locator('#login2')).toBeVisible()
    
})