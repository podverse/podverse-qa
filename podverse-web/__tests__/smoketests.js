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

                it.only('should load homepage without error', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 25000)

                it.only('should load About page when About footer link is pressed', async () => {
                    await page.click('.footer-bottom__link[href="/about"]')
                    await page.waitForXPath("//h3[contains(text(), 'About')]")
                }, 10000)

                it('should load Terms page when Terms footer link is pressed', async () => {
                    await page.click('.footer-bottom__link[href="/terms"]')
                    await page.waitForSelector('h3', {
                        visible: true,
                        text: "Terms of Service"
                    })
                }, 10000)

                it('should load Premium page when Premium footer link is pressed', async () => {
                    await page.click('.footer-bottom__link[href="/membership"]')
                    await page.waitForSelector('h3', {
                        visible: true,
                        text: "Premium"
                    })
                }, 10000)

                it('should load Search page when search magnifying glass link is pressed', async () => {
                    await page.click('.fa-search[href="/search"]')
                    await page.waitForSelector('h3', {
                        visible: true,
                        text: "Search"
                    })
                }, 10000)

                it('should load Podcasts page when Podcasts header link is pressed', async () => {
                    await page.click('.nav-link[href="/podcasts"]')
                    await page.waitForSelector('h3', {
                        visible: true,
                        text: "Podcasts"
                    })
                }, 10000)

                it('should load Playlist page when Playlist header link is pressed', async () => {
                    await page.click('.nav-link[href="/playlists"]')
                    await page.waitForSelector('div', {
                        visible: true,
                        text: "Login to view your playlists"
                    })
                }, 10000)

                it.only('should load Settings page when dropdown is clicked and Settings link is pressed', async () => {
                    await page.click('.dropdown-toggle')
                    await page.click('.dropdown-item[href="/settings"]')
                    await page.waitForXPath("//h3[contains(text(), 'Interface')]")
                }, 10000)
            }, 30000)
    },
    20000
)
