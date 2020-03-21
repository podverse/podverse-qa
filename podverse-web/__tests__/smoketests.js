import expectPuppeteer from 'expect-puppeteer'

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

                it.only('Load Homepage', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 35000)

                it('About Page: footer link', async () => {
                    await page.click('.footer-bottom__link[href="/about"]')
                    await page.waitForXPath("//h3[contains(text(), 'About')]")
                }, 10000)

                it('Terms Page: footer link', async () => {
                    await page.click('.footer-bottom__link[href="/terms"]')
                    await page.waitForXPath("//h3[contains(text(), 'Terms of Service')]")
                }, 10000)

                it('Premium Page: footer link', async () => {
                    await page.click('.footer-bottom__link[href="/membership"]')
                    await page.waitForXPath("//h3[contains(text(), 'Premium')]")
                }, 10000)

                it('Search Page: magnifying glass link', async () => {
                    await page.click('.nav-link[href="/search"]')
                    await page.waitForXPath("//h3[contains(text(), 'Search')]")
                }, 10000)

                it('Podcasts Page: header link', async () => {
                    await page.click('.nav-link[href="/podcasts"]')
                    await page.waitForXPath("//h3[contains(text(), 'Podcasts')]")
                }, 10000)

                it('Playlist Page: header link', async () => {
                    await page.click('.nav-link[href="/playlists"]')
                    await page.waitForXPath("//div[contains(text(), 'Login to view your playlists')]")
                }, 10000)

                it('Settings Page: dropdown ► settings link', async () => {
                    await page.click('.dropdown-toggle')
                    await page.click('.dropdown-item[href="/settings"]')
                    await page.waitForXPath("//h3[contains(text(), 'Interface')]")
                }, 10000)
            }, 60000)

        describe(
            '/ (Dropdowns)',
            () => {

                it('should load homepage without error', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 35000)

            }, 60000)

        describe(
            '/ (Modals)',
            () => {

                it.only('Login Modal: hidden header content SHOULD FAIL', async () => {
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                })

                it.only('Login Modal: header link', async () => {
                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                })

                it.only('Sign Up Modal: login modal link', async () => {
                    await page.click('.login-modal__sign-up')
                    await page.waitForXPath("//h3[contains(text(), 'Sign Up')]")
                    await page.click('.close-btn')
                })

                it.only('Forgot? Modal: login modal link', async () => {
                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.click('.login-modal__forgot')
                    await page.waitForXPath("//h3[contains(text(), 'Forgot Password')]")
                    await page.click('.close-btn')
                })

                it.only('Queue Modal: login modal link', async () => {
                    await page.click('.mp-header__queue')
                    await page.waitForXPath("//h3[contains(text(), 'Queue')]")
                    await page.click('.close-btn')
                })

            }, 60000)
    },
    20000
)
