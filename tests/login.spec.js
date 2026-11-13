const{test,expect}=require('@playwright/test')
const login = require('../page/login')
const dataset = require('../utils/validcredential.json')
const dataset1 = require('../utils/invalidcredential.json')
const purchase = require('../page/purchase')
test('TC3 Login with Valid Credentials', async({page})=>
{
    let lob = new login(page)
    await lob.acessurl()
    //const username = 'riyam'
   // const password = 'riyamenon'
    await lob.loginbutton()
    await lob.enterusername(dataset.Username)
    await lob.enterpassword(dataset.Password)
    await lob.clickloginbutton()
    //await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible()
})

test('TC4 Login with Invalid username and Valid password', async({page})=>
{
    let lob1 = new login(page)
   // const username = 'riya'
  //  const password = 'riyamenon'
    await lob1.acessurl()
    await lob1.loginbutton()
    await lob1.enterusername(dataset1[0].Username)
    await lob1.enterpassword(dataset1[0].Password)
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Wrong password.')
        await dialog.accept()
        })
    await lob1.clickloginbutton()
   // await page.pause()
    //await expect(page.getByRole('button', { name: 'Log in' })).not.toBeVisible()
})

test('TC5 Login with valid username and invalid password', async({page})=>
{
    let lob2 = new login(page)
    //const username = 'riyam'
    //const password = 'riyamenon1'
    await lob2.acessurl()
    await lob2.loginbutton()
    await lob2.enterusername(dataset1[1].Username)
    await lob2.enterpassword(dataset1[1].Password)
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Wrong password.')
        await dialog.accept()
        })
    await lob2.clickloginbutton()
    //await page.pause()
    //await expect(page.getByRole('button', { name: 'Log in' })).not.toBeVisible()
})

test('TC6 Login with invalid username and invalid password', async({page})=>
{
    let lob3 = new login(page)
   // const username = 'riya'
   // const password = 'riyamenon1'
    await lob3.acessurl()
    await lob3.loginbutton()
    await lob3.enterusername(dataset1[2].Username)
    await lob3.enterpassword(dataset1[2].Password)
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Wrong password.')
        await dialog.accept()
        })
    await lob3.clickloginbutton()
    //await page.pause()
    //await expect(page.getByRole('button', { name: 'Log in' })).not.toBeVisible()
})