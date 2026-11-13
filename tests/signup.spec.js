const{test,expect}=require('@playwright/test')
const {faker} = require('@faker-js/faker')
const signup = require('../page/signup')
test ('TC1 SignUp Button', async({page})=>
{
    let ob = new signup(page)
    await ob.acessurl()
    await ob.signupbutton()
    const username = 'Riya'+Date.now()
    const password = 'Riya12'+Date.now()
    console.log(username +'and'+ password)
    await ob.createusername(username)
    await ob.createpassword(password)
      page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Sign up successful')
        await dialog.accept()
        })
    await ob.clicksignupbutton()
    await expect(page.getByRole('button', { name: 'Sign up' })).toBeVisible()
})

test ('TC2 SignUp Close Button', async({page})=>
{
    let obj = new signup(page)
    await obj.acessurl()
    await obj.signupbutton()
    //const username1 = 'Riya'+Date.now()
   // const password1 = 'Riya12'+Date.now()
   const username = faker.internet.username();
   const password = faker.internet.password();
    console.log(username +'and'+ password)
    await obj.createusername(username)
    await obj.createpassword(password)
    await obj.clickclosebutton()
    //await expect(page).toHaveTitle('PRODUCT STORE')
   await expect(page.locator('#signInModal')).not.toBeVisible()
})