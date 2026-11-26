class HomePage {

    async open() {
        await browser.url('/');
    }

    getNavigationLinks(path) {
        return $$(`header a[href="${path}"]`);
    }

    async clickNavigationLink(path) {

        const links = await this.getNavigationLinks(path);

        for (const link of links) {
            if (await link.isDisplayed()) {
                await link.click();
                return;
            }
        }

        throw new Error(`Navigation link not found: ${path}`);
    }

}

module.exports = new HomePage();