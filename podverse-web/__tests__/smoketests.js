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

        it.only('should load homepage without error', async () => {
            await page.goto(origin)
            await page.waitForSelector('.footer-top__brand', {
                visible: true
            })
        }, 10000)

        it.only('should load About page when About footer link is pressed', async () => {
            await page.click('.footer-bottom__link[href="/about"]')
            await page.waitForSelector('h3', {
                visible: true,
                text: "About"
            })
        }, 10000)

        it.only('should load Contact page when Contact footer link is pressed', async () => {
            await page.click('.footer-bottom__link[href="/contact"]')
            await page.waitForSelector('div', {
                visible: true,
                text: "Contact Podverse"
            })
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

        it('should load Settings page when dropdown is clicked and Settings link is pressed', async () => {
            await page.click('.dropdown-toggle')
            await page.click('.dropdown-itemk[href="/settings"]')
            await page.waitForSelector('h3', {
                visible: true,
                text: "Interface"
            })
        }, 10000)

    },
    timeout
)
