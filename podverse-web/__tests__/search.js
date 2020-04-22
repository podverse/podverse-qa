const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Search Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/search')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('Search Page loads', async () => {
            await page.waitForXPath('//h3[contains(text(), "Search")]')
        }, 10000)

        it('Search and Navigate to Podcast', async () => {
            await page.focus('.search__input')
            await page.keyboard.type('Very Bad Wizards')
            // await page.click('.search__input-btn')
            await page.keyboard.press('Enter')
            await page.waitFor(1000)
            const elements = await page.$x('//div[@class="media-list-item-b__title"][contains (text(), "Very Bad Wizards")]')
            await elements[0].click();
            await page.waitForXPath('//div[@class="media-header__sub-title"][contains(text(), "Tamler Sommers & David Pizarro")]')
        }, 20000)

        it('Search Page Loads Again', async () => {
            await page.goto(origin + '/search')
            await page.waitForXPath('//h3[contains(text(), "Search")]')
        }, 10000)

        it('Search and Navigate to Host', async () => {
            await page.click('.search-by__host')
            await page.focus('.search__input')
            await page.keyboard.type('Tamler Sommers')
            await page.click('.search__input-btn')
            await page.waitFor(1000)
            const elements = await page.$x('//div[@class="media-list-item-b__title"][contains (text(), "Very Bad Wizards")]')
            await elements[0].click();
            await page.waitForXPath('//div[@class="media-header__sub-title"][contains(text(), "Tamler Sommers & David Pizarro")]')
        }, 20000)

        it('Request a Podcast button loads properly', async () => {
            await page.goto(origin + '/search')
            await page.waitForXPath('//h3[contains(text(), "Search")]')
            await page.waitForXPath('//a[@href="https://docs.google.com/forms/d/e/1FAIpQLSdewKP-YrE8zGjDPrkmoJEwCxPl_gizEkmzAlTYsiWAuAk1Ng/viewform?usp=sf_link"]')
        }, 10000)

    }, 60000)