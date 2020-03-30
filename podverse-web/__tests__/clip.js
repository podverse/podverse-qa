const { getTestOrigin, scrollIntoView } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Clip Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            // await page.setViewport({ width: 1366, height: 768 });
            await page.goto(origin + '/clip/9rA5BhWp')
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        it('loads the page', async () => {
            await page.waitForXPath('//div[@class="media-list-item-a__title"][contains(text(), "Amet aliquam id diam maecenas ultricies mi eget.")]')
            await page.waitForXPath('//a[@class="media-header__title"][contains(text(), "Recode Decode")]')
        }, 10000)

        it('Clip Page Dropdowns: Clips ► Episodes', async () => {
            await scrollIntoView(page, '.transparent.dropdown-toggle.btn.btn-secondary')
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Clips")]')
            await elements1[0].click();
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Episodes")]')
            await elements2[0].click();
            await page.waitForXPath('//div[contains(text(), "Marc Andreessen, investor and entrepreneur")]')
        })

        // it('Clip Page Dropdowns: Episodes ► Clips', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Episodes")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//div[@class="dropdown-menu show"]//button[@class="dropdown-item"][contains (text(), "Clips")]')
        //     await elements2[0].click();
        //     await page.waitForXPath('//div[contains(text(), "Viverra orci sagittis eu volutpat odio facilisis mauris sit.")]')
        // })

        // it('Clip Page: Sort ► Most Recent', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//div[@class="dropdown-menu show"]//button[@class="dropdown-item"][contains (text(), "most recent")]')
        //     await elements2[0].click();
        //     await page.waitForXPath("//button[contains(text(), 'most recent')]")
        // })

        // it('Clip Page: Sort ► Top Past Day', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "most recent")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past day")]')
        //     await elements2[0].click();
        //     await page.waitForXPath("//button[contains(text(), 'top - past day')]")
        // })

        // it('Clip Page: Sort ► Top Past Week', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past day")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
        //     await elements2[0].click();
        //     await page.waitForXPath("//button[contains(text(), 'top - past week')]")
        // })

        // it('Clip Page: Sort ► Top Past Month', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past month")]')
        //     await elements2[0].click();
        //     await page.waitForXPath("//button[contains(text(), 'top - past month')]")
        // })

        // it('Clip Page: Sort ► Top Past Year', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past month")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past year")]')
        //     await elements2[0].click();
        //     await page.waitForXPath("//button[contains(text(), 'top - past year')]")
        // })

        // it('Clip Page: Sort ► Top All Time', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past year")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - all time")]')
        //     await elements2[0].click();
        //     await page.waitForXPath("//button[contains(text(), 'top - all time')]")
        // })

        // it('Clip Page: Sort ► Random', async () => {
        //     const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - all time")]')
        //     await elements1[0].click();
        //     const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "random")]')
        //     await elements2[0].click();
        //     await page.waitForXPath("//button[contains(text(), 'random')]")
        // })

    }, 60000)