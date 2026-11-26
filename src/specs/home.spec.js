const homePage = require('../pages/home.page');

describe('Home Page', () => {

    beforeEach(async () => {
        await homePage.open();
    });

    it('Verify homepage title', async () => {

        await expect(browser).toHaveTitle(
            expect.stringContaining('Vellum')
        );

    });

    it('Verify all navigation links work correctly', async () => {

        const pages = ['/shop', '/categories', '/creators', '/'];

        for (const page of pages) {

            await homePage.clickNavigationLink(page);

            await expect(browser).toHaveUrl(
                `https://vellum.amsoft.am${page}`
            );

        }

    });

});