const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (User login tests)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin)
            await page.waitForXPath("//a[contains(text(), 'Podverse')]")
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        describe(
            '/ (Premium valid)',
            () => {
                it.only('has all the expected metatags', async () => {
                    expect(true).toBe(false);
                })
            }
        )

    }
)