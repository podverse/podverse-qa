const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Smoke Tests)',
    () => {
        let page
        beforeAll(async () => {
            const context = await global.__BROWSER__.createIncognitoBrowserContext()
            page = await context.newPage()
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        describe(
            '/ (Pages)',
            () => {

                it('should load homepage without error', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 35000)

                it('should load About page when About footer link is pressed', async () => {
                    await page.click('.footer-bottom__link[href="/about"]')
                    await page.waitForXPath("//h3[contains(text(), 'About')]")
                }, 10000)

                it('should load Terms page when Terms footer link is pressed', async () => {
                    await page.click('.footer-bottom__link[href="/terms"]')
                    await page.waitForXPath("//h3[contains(text(), 'Terms of Service')]")
                }, 10000)

                it('should load Premium page when Premium footer link is pressed', async () => {
                    await page.click('.footer-bottom__link[href="/membership"]')
                    await page.waitForXPath("//h3[contains(text(), 'Premium')]")
                }, 10000)

                it('should load Search page when search magnifying glass link is pressed', async () => {
                    await page.click('.nav-link[href="/search"]')
                    await page.waitForXPath("//h3[contains(text(), 'Search')]")
                }, 10000)

                it('should load Podcasts page when Podcasts header link is pressed', async () => {
                    await page.click('.nav-link[href="/podcasts"]')
                    await page.waitForXPath("//h3[contains(text(), 'Podcasts')]")
                }, 10000)

                it('should load Playlist page when Playlist header link is pressed', async () => {
                    await page.click('.nav-link[href="/playlists"]')
                    await page.waitForXPath("//div[contains(text(), 'Login to view your playlists')]")
                }, 10000)

                it('should load Settings page when dropdown is clicked and Settings link is pressed', async () => {
                    await page.click('.dropdown-toggle')
                    await page.click('.dropdown-item[href="/settings"]')
                    await page.waitForXPath("//h3[contains(text(), 'Interface')]")
                }, 10000)
            }, 60000)
    },
    20000
)
