const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Smoke Tests)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('should load homepage without error', async () => {
            await page.goto(origin)
            await page.waitForSelector('.footer-top__brand', { visible: true })
        })

        it('should load about page when about footer link is pressed', async () => {
            await page.click('.footer-bottom__link[href="/about"]')
            await page.waitForXPath("//h3[contains(text(), 'About')]")
        })
    },
    20000
)
