const { getTestOrigin, scrollIntoView, testDropdownItemSelect, testSharedMetaTags } = require('../utility')
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
            await testDropdownItemSelect(page, "Clips", "Episodes")
        })

        it('Episode Page Dropdowns: Episodes ► Clips', async () => {
            await testDropdownItemSelect(page, "Episodes", "Clips")
        })

        it('Episode Page: Sort ► Most Recent', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past week", "most recent")
        })

        it('Episode Page: Sort ► Top Past Day', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "most recent", "top - past day")
        })

        it('Episode Page: Sort ► Top Past Week', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past day", "top - past week")
        })

        it('Episode Page: Sort ► Top Past Month', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past week", "top - past month")
        })

        it('Episode Page: Sort ► Top Past Year', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past month", "top - past year")
        })

        it('Episode Page: Sort ► Top All Time', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - past year", "top - all time")
        })

        it('Episode Page: Sort ► Random', async () => {
            await scrollIntoView(page, '.media-list__selects')
            await testDropdownItemSelect(page, "top - all time", "random")
        })

        it('Episode Page: Shared Meta Tags', async () => {
            await testSharedMetaTags(page)
        })

    }, 60000)