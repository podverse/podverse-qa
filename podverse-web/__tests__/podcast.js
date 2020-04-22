const { getTestOrigin, scrollIntoView } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Podcast Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/podcast/Yqft_RG8j')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//span[contains(text(), "Very Bad Wizards")]')
        }, 10000)

        it('Podcast Page: Episodes ► Clips', async () => {
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Episodes")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Clips")]')
            await elements2[0].click();
            await page.waitForXPath('//div[@class="media-list-item-a__title"][contains(text(), "Lacus sed turpis tincidunt id aliquet risus feugiat in ante.")]')
        })

        it('Podcast Page: Clips ► Episodes', async () => {
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Clips")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Episodes")]')
            await elements2[0].click();
            await page.waitForXPath('//div[@class="media-list-item-a__title"][contains(text(), "Episode 1: Brains, Robots, and Free Will (Free Will and Morality Pt. 1)")]')
        })

        it('Podcast Page: Sort ► Most Recent', async () => {
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "most recent")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'most recent')]")
        })

        it('Podcast Page: Sort ► Top Past Day', async () => {
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "most recent")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past day")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past day')]")
        })

        it('Podcast Page: Sort ► Top Past Week', async () => {
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past day")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past week')]")
        })

        it('Podcast Page: Sort ► Top Past Month', async () => {
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past month")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past month')]")
        }, 10000)

        xit('Podcast Page: Sort ► Top Past Year', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past month")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
            await elements2[0].click();
            await page.waitForXPath("//button[contains(text(), 'top - past week')]")
        }, 10000)

        it('Podcast Page: Page 2 of Past Year', async () => {
            await page.waitFor(2000)
            await scrollIntoView(page, '.pagination')
            const elements = await page.$x('//button[@class="page-link"][contains (text(), "2")]')
            await elements[0].click();
            await page.waitFor(2000)
            await page.waitForXPath('//div[@class="media-list-item-a__title"][contains(text(), "Episode 123: What Chilling Effect? (Intelligence Pt. 2)")]')
        }, 15000)

    }
)