class ShopPage {

    get searchInput() {
        return $('#shop-search');
    }

    get products() {
        return $$('a[href^="/product/"]');
    }

    get daybookProduct() {
        return $('a=Daybook - Printable Planner Set');
    }

    get fieldworkProduct() {
        return $('a=Fieldwork - Notion Life OS');
    }

    async open() {
        await browser.url('/shop');
    }

    async searchProduct(productName) {
        await this.searchInput.setValue(productName);
    }

}

module.exports = new ShopPage();