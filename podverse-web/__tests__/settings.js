const { getTestOrigin, testPageMetaTags, testSharedMetaTags } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Settings Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/settings')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//h3[contains(text(), "Interface")]')
        }, 10000)

        it('Settings Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

        it('Settings Page: Page Meta Tags', async () => {
            await testPageMetaTags(page, `Podverse - Settings`, `Customize your account settings on Podverse.`)
        })

    }, 60000)