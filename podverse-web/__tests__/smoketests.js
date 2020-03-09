const expect = require('expect-puppeteer')

const { getTestOrigin } = require('../utility')

const timeout = 12000

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
        })

        it('should load homepage without error', async () => {
            await page.goto(origin)
            await page.waitForSelector('.footer-top__brand', {
                visible: true
            })
        }, 10000)

        it('should load about page when about footer link is pressed', async () => {
            await page.click('.footer-bottom__link[href="/about"]')
            await page.waitForSelector('h3', {
                visible: true,
                text: "About"
            })
        }, 10000)
    },
    timeout
)
