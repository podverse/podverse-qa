const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Episode Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/episode/nkLmKNNwwcO')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//div[contains(text(), "The Americans are coming, but will the war be over by the time they get there? Germany throws everything into a last series of stupendous attacks in the West while hoping to avoid getting burned by a fire in the East they helped fan.")]')
        }, 10000)

    }, 60000)