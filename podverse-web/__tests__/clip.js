const { getTestOrigin, scrollIntoView, testDropdownItemSelect, testPageMetaTags, testSharedMetaTags } = require('../utility')
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
            await testDropdownItemSelect(page, "Clips", "Episodes")
        }, 10000)

        it('Clip Page Dropdowns: Episodes ► Clips', async () => {
            await testDropdownItemSelect(page, "Episodes", "Clips")
        }, 10000)

        it('Clip Page: Clip Modal', async () => {
            await page.click('.media-info-controls__make-clip.btn.btn-secondary')
            await page.waitForXPath("//h3[contains(text(), 'Make Clip')]")
            await page.click('.make-clip-modal__cancel')
        })

        it('Clip Page: Add To Modal', async () => {
            await page.click('.media-info-controls__add-to.btn.btn-secondary')
            await page.waitForXPath("//h3[contains(text(), 'Add To')]")
            await page.click('.close-btn')
        })

        it('Clip Page: Share Modal', async () => {
            await page.click('.media-info-controls__share.btn.btn-secondary')
            await page.waitForXPath("//h3[contains(text(), 'Share')]")
            await page.click('.close-btn')
        })

        it('Clip Page: Sort ► Most Recent', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past week", "most recent")
        })

        it('Clip Page: Sort ► Top Past Day', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "most recent", "top - past day")
        })

        it('Clip Page: Sort ► Top Past Week', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past day", "top - past week")
        })

        it('Clip Page: Sort ► Top Past Month', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past week", "top - past month")
        })

        it('Clip Page: Sort ► Top Past Year', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past month", "top - past year")
        })

        it('Clip Page: Sort ► Top All Time', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past year", "top - all time")
        })

        it('Clip Page: Sort ► Random', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - all time", "random")
        })

        it('Clip Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

        it('Clip Page: Page Meta Tags', async () => {
            await testPageMetaTags(page, `Amet aliquam id diam maecenas ultricies mi eget.`, `Jason Calacanis: TikTok should be banned, Tim Cook doesn't have enough chutzpah, and Uber will be fine - Recode Decode`)
        })

    }, 60000)