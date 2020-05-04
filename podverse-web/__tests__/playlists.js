const { getTestOrigin, testSharedMetaTags } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Playlists Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/playlists')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//div[contains(text(), "Login to view your playlists")]')
        }, 10000)

        it('Playlists Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

    }, 60000)