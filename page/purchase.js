class purchase{
    constructor(page)
    {
        this.page=page
        this.laptoplink = page.getByRole('link',{name:'Laptops'})
        this.laptopproduct = page.getByRole('link',{name:'Sony vaio i5'})
        this.addtocartlink = page.getByRole('link',{name:'Add to cart'})
        this.phonesproduct = page.getByRole('link',{name:'Samsung galaxy s6'})
        this.monitorslink = page.getByRole('link',{name:'Monitors'})
        this.monitorproduct = page.getByRole('link',{name:'Apple monitor 24'})
        this.cartlinkfield = page.locator('#cartur')
        this.placeholderlink = page.getByRole('button',{name:'Place Order'})
        this.purchasename = page.locator('#name')
        this.purchasecountry = page.locator('#country')
        this.purchasecity = page.locator('#city')
        this.puchasecreditcard = page.locator('#card')
        this.purchasemonth = page.locator('#month')
        this.purchaseyear = page.locator('#year')
        this.clickpurchaselink = page.getByRole('button',{name:'Purchase'})
        this.clickoklink = page.getByRole('button',{name:'OK'})

    }


    async selectlaptops()
    {
       await this.laptoplink.click()
       await this.laptopproduct.click()
       return this

    }
    async addtocart()
    {
       await this.addtocartlink.click()
       return this
    }
    async selectphones()
    {
       await this.phonesproduct.click()
       return this
    }
    async selectmonitors()
    {
       await this.monitorslink .click()
       await this.monitorproduct.click()
       return this
    }

    async carticon()
    {
        await this.cartlinkfield.click()
        return this
    }

// Clear Existing Product from Cart
    // Clear Existing Products from Cart
async clearCart()
{
    await this.carticon();

    const deletebutton = this.page.locator('//a[text()="Delete"]');

    while (await deletebutton.count() > 0)
    {
        await deletebutton.first().click();
        await deletebutton.first().waitFor({ state: 'detached' });
    }

    // Go back to Product Store
    await this.page.getByText('PRODUCT STORE').click();

    return this;
}

    async placeholder()
    {
        await this.placeholderlink.click()
        return this
    }
    async purchasedetails(name,country,city,creditcard,month,year)
    {
        await this.purchasename.fill(name)
        await this.purchasecountry.fill(country)
        await this.purchasecity.fill(city)
        await this.puchasecreditcard.fill(creditcard)
        await this.purchasemonth.fill(month)
        await this.purchaseyear.fill(year)
        return this

    }
     async clickpurchasebutton()
    {
        await this.clickpurchaselink.click()
        return this
    }
    async clickokbutton()
    {
        await this.clickoklink.click()
        return this
    }

}
module.exports= purchase