const productPage = require('../pages/product.page');

describe('Product Page', () => {

    beforeEach(async () => {
        await productPage.open();
    });

    it('Verify product details', async () => {

        await expect(productPage.productName).toBeDisplayed();

        await expect(productPage.productName).toHaveText(
            'Daybook - Printable Planner Set'
        );

        await expect(productPage.productPrice).toBeDisplayed();

        await expect(productPage.productPrice).toHaveText('$12');

    });

    it('Verify Add to Cart functionality', async () => {

        await expect(productPage.addToCartButton).toBeDisplayed();

        await expect(productPage.addToCartButton).toBeEnabled();

        await productPage.addToCart();

        await expect(productPage.viewCart).toBeDisplayed();

        await productPage.openCart();

        await expect(browser).toHaveUrl(
            'https://vellum.amsoft.am/cart'
        );

        await expect(productPage.cartProduct).toBeDisplayed();

    });

});