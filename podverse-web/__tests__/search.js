const { getTestOrigin, testSharedMetaTags } = require('../utility')
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

        it('Search Podcast: Mouse Click', async () => {
            await page.focus('.search__input')
            await page.keyboard.type('The Joe Rogan Experience')
            await page.click('.search__input-btn')
            await page.waitFor(500)
            await page.waitForXPath('//div[@class="media-list-item-b__title"][contains (text(), "The Joe Rogan Experience")]')
        }, 20000)

        it('Search Podcast: Enter Key', async () => {
            await page.focus('.search__input')
            await page.$eval('.search__input', el => el.setSelectionRange(0, el.value.length))
            await page.keyboard.press('Backspace')
            await page.keyboard.type('Very Bad Wizards')
            await page.keyboard.press('Enter')
            await page.waitFor(500)
            await page.waitForXPath('//div[@class="media-list-item-b__title"][contains (text(), "Very Bad Wizards")]')
        }, 20000)

        it('Navigate to Podcast', async () => {
            const elements = await page.$x('//div[@class="media-list-item-b__title"][contains (text(), "Very Bad Wizards")]')
            await elements[0].click();
            await page.waitForXPath('//div[@class="media-header__sub-title"][contains(text(), "Tamler Sommers & David Pizarro")]')
        }, 20000)

        it('Search Page Loads: Again', async () => {
            await page.goto(origin + '/search')
            await page.waitForXPath('//h3[contains(text(), "Search")]')
        }, 10000)

        it('Search Host: Mouse Click', async () => {
            await page.focus('.search__input')
            await page.keyboard.type('Joe Rogan')
            await page.click('.search__input-btn')
            await page.waitFor(500)
            await page.waitForXPath('//div[@class="media-list-item-b__title"][contains (text(), "The Joe Rogan Experience")]')
        }, 20000)

        it('Search Host: Enter Key', async () => {
            await page.click('.search-by__host')
            await page.focus('.search__input')
            await page.$eval('.search__input', el => el.setSelectionRange(0, el.value.length))
            await page.keyboard.press('Backspace')
            await page.keyboard.type('Tamler Sommers')
            await page.keyboard.press('Enter')
            await page.waitFor(500)
            await page.waitForXPath('//div[@class="media-list-item-b__title"][contains (text(), "Very Bad Wizards")]')
        }, 20000)

        it('Search Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

        it('Request a Podcast button loads properly', async () => {
            await page.waitForXPath('//a[@href="https://docs.google.com/forms/d/e/1FAIpQLSdewKP-YrE8zGjDPrkmoJEwCxPl_gizEkmzAlTYsiWAuAk1Ng/viewform?usp=sf_link"]')
        }, 10000)



    }, 60000)