const { getTestOrigin } = require('../utility')
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

    }, 60000)