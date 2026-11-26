class ProductPage {

    get productName() {
        return $('h1.pdp-title');
    }

    get productPrice() {
        return $('.pdp-price .price-now');
    }

    get addToCartButton() {
        return $('button=Add to Cart');
    }

    get viewCart() {
        return $('//*[normalize-space()="View cart"]');
    }

    get cartProduct() {
        return $('//*[normalize-space()="Daybook - Printable Planner Set"]');
    }

    async open() {
        await browser.url('/product/p31');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.viewCart.click();
    }

}

module.exports = new ProductPage();