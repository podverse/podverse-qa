const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Footer)',
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

        it('Load Homepage', async () => {
            await page.goto(origin)
            await page.waitForXPath("//a[contains(text(), 'Podverse')]")
        }, 40000)

        it('Dark Mode ► Light Mode', async () => {
            await page.waitForXPath('//html[@data-theme="dark"]')
            await page.click('.react-switch-bg')
            await page.waitForXPath('//html[@data-theme="light"]')
        })

        it('Contact Button Loads Properly', async () => {
            await page.waitForXPath('//a[@href="https://goo.gl/forms/BK9WPAsK1q6xD4Xw1"]')
        })

    })