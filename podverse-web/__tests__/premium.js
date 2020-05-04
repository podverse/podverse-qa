const { getTestOrigin, testSharedMetaTags } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Premium Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/membership')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//h3[contains(text(), "Premium")]')
        }, 10000)

        it('Premium Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

    }, 60000)