const { getTestOrigin, scrollIntoView } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Clip Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/clip/9rA5BhWp')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//div[contains(text(), "Amet aliquam id diam maecenas ultricies mi eget.")]')
        }, 10000)

        it('Clip Page Dropdowns: Clips ► Episodes', async () => {
            await page.waitFor(1000)
            await scrollIntoView(page, '.media-list-selects__left')
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Clips")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Episodes")]')
            await elements2[0].click();
            await page.waitFor(2000)
            await page.waitForXPath('//div[contains(text(), "Aicha Evans and Jesse Levinson: Self-driving taxis will be here in 2021")]')
        }, 10000)

        it('Clip Page Dropdowns: Episodes ► Clips', async () => {
            await scrollIntoView(page, '.media-info__show-notes')
            await page.waitFor(2000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Episodes")]')
            await elements1[0].click();
            await page.waitFor(2000)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Clips")]')
            await elements2[0].click();
            await page.waitForXPath('//div[contains(text(), "Viverra orci sagittis eu volutpat odio facilisis mauris sit.")]')
        }, 12000)

        it('Clip Page: Sort ► Most Recent', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "most recent")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'most recent')]")
        })

        it('Clip Page: Sort ► Top Past Day', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "most recent")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past day")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past day')]")
        })

        it('Clip Page: Sort ► Top Past Week', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past day")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past week')]")
        })

        it('Clip Page: Sort ► Top Past Month', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past month")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past month')]")
        })

        it('Clip Page: Sort ► Top Past Year', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past month")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past year")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past year')]")
        })

        it('Clip Page: Sort ► Top All Time', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past year")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - all time")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - all time')]")
        })

        it('Clip Page: Sort ► Random', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await page.waitFor(1000)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - all time")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "random")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'random')]")
        })

    }, 60000)