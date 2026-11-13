const base=require('@playwright/test')

const test=base.test.extend({
    customfixture: async({page},use)=>
    {
        await page.goto('https://www.demoblaze.com')
        await use(page)
    }
})
module.exports={test}