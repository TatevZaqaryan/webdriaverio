const shopPage = require('../pages/shop.page');

describe('Shop Page', () => {

    beforeEach(async () => {
        await shopPage.open();
    });

    it('Verify products are displayed', async () => {

        await expect(shopPage.products).toBeElementsArrayOfSize({
            gte: 1
        });

        await expect(shopPage.products[0]).toBeDisplayed();

    });

    it('Verify search functionality', async () => {

        await shopPage.searchProduct('Daybook');

        await expect(shopPage.daybookProduct).toBeDisplayed();

        await expect(shopPage.fieldworkProduct).not.toBeDisplayed();

    });

});