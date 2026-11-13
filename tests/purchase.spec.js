const{expect}=require('@playwright/test')
const purchase = require('../page/purchase')
const login = require('../page/login')
const dataset = require('../utils/validcredential.json')
const {test}=require('../utils/fixtures')
test.beforeEach(async({customfixture})=>
{
    await customfixture.goto('https://www.demoblaze.com')
})
test('TC7 Product under laptops', async({customfixture})=>
{
    let lob = new login(customfixture)
    await lob.loginbutton()
    await lob.enterusername(dataset.Username)
    await lob.enterpassword(dataset.Password)
    const pobj = await lob.clickloginbutton()
    await pobj.clearCart()
    await pobj.selectlaptops()
    customfixture.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added')
        await dialog.accept()
    })
    await pobj.addtocart()
    
})

test('TC8 Product under Phones', async({customfixture})=>
{
    let lob = new login(customfixture)
    await lob.loginbutton()
    await lob.enterusername(dataset.Username)
    await lob.enterpassword(dataset.Password)
    const pobj = await lob.clickloginbutton()
    await pobj.clearCart()
    await pobj.selectphones()
    customfixture.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added')
        await dialog.accept()
    })
    await pobj.addtocart()
    await pobj.carticon()
    await pobj.placeholder()
    await pobj.purchasedetails('Riya','India','Mumbai','8585885','Jan','2026')
    await pobj.clickpurchasebutton()
    await expect(customfixture.locator('.sweet-alert')).toContainText('Thank you for your purchase!')
    await pobj.clickokbutton()
    
})

test('TC9 Product under Monitors', async({customfixture})=>
{
    let lob = new login(customfixture)
    await lob.loginbutton()
    await lob.enterusername(dataset.Username)
    await lob.enterpassword(dataset.Password)
    const pobj = await lob.clickloginbutton()
    await pobj.clearCart()
    await pobj.selectmonitors()
    customfixture.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added')
        await dialog.accept()
    })
    await pobj.addtocart()
    await pobj.carticon()
    await pobj.placeholder()
    await pobj.purchasedetails('Riya','India','Mumbai','8585885','Jan','2026')
    await pobj.clickpurchasebutton()
    await expect(customfixture.locator('.sweet-alert')).toContainText('Thank you for your purchase!')
    await pobj.clickokbutton()
})