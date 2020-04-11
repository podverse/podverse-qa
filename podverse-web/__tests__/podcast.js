const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Podcast Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/podcast/Yqft_RG8j')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//span[contains(text(), "Very Bad Wizards")]')
        }, 10000)

    }
)