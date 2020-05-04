const { checkElementExistsByXPath, getTestOrigin, testPageMetaTags, testSharedMetaTags } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (About Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/about')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//h3[contains(text(), "About")]')
        }, 10000)

        it('About Page: Meta Tags', async () => {
            await checkElementExistsByXPath(page, '//meta[@name="title"][@content="Podverse - About"]')
        })

        it('About Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

        it('About Page: Page Meta Tags', async () => {
            await testPageMetaTags(page, 'Podverse - About', 'Information about the Podverse open source podcast app.')
        })

    }, 60000)