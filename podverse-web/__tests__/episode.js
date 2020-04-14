const { getTestOrigin, scrollIntoView } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Episode Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/episode/nkLmKNNwwcO')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//div[contains(text(), "The Americans are coming, but will the war be over by the time they get there? Germany throws everything into a last series of stupendous attacks in the West while hoping to avoid getting burned by a fire in the East they helped fan.")]')
        }, 10000)

        it('Episode Page Dropdowns: Clips ► Episodes', async () => {
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Clips")]')
            await elements1[0].click();
            await scrollIntoView(page, '.media-list__selects')
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Episodes")]')
            await elements2[0].click();
            await page.waitFor(2000)
            await page.waitForXPath('//div[contains(text(), "Show 53 - Blueprint for Armageddon IV")]')
        }, 10000)

        it('Episode Page Dropdowns: Episodes ► Clips', async () => {
            await page.waitFor(2000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Episodes")]')
            await elements1[0].click();
            await page.waitFor(2000)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Clips")]')
            await elements2[0].click();
            await page.waitForXPath('//div[contains(text(), "Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae.")]')
        }, 12000)

        it('Episode Page: Sort ► Most Recent', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "most recent")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'most recent')]")
        })

        it('Episode Page: Sort ► Top Past Day', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "most recent")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past day")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past day')]")
        })

        it('Episode Page: Sort ► Top Past Week', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past day")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past week')]")
        })

        it('Episode Page: Sort ► Top Past Month', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past month")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past month')]")
        })

        it('Episode Page: Sort ► Top Past Year', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past month")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past year")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past year')]")
        })

        it('Episode Page: Sort ► Top All Time', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past year")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - all time")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - all time')]")
        })

        it('Episode Page: Sort ► Random', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - all time")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "random")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'random')]")
        })

    }, 60000)