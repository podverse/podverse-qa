const { getTestOrigin, testSharedMetaTags } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (FAQ Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/faq')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//h3[contains(text(), "FAQ")]')
        }, 10000)

        it('Episode Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

    }, 60000)