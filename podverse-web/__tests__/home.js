const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Home Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin)
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//div[contains(text(), "Amet aliquam id diam maecenas ultricies mi eget.")]')
            await page.waitForXPath('//div[contains(text(), "Magna fringilla urna porttitor rhoncus dolor.")]')
        }, 10000)

    }, 60000)