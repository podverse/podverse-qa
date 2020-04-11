const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Search Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/search')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//h3[contains(text(), "Search")]')
        }, 10000)

    }, 60000)