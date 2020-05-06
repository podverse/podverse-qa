// const { getTestOrigin, testDropdownItemSelect, testPageMetaTags, testSharedMetaTags } = require('../utility')
// const origin = getTestOrigin()

// describe(
//     '/ (Home Page)',
//     () => {

//         let page
//         beforeAll(async () => {
//             page = await global.__BROWSER__.newPage()
//             await page.goto(origin)
//         })

//         afterAll(async () => {
//             await page.close()
//             await page.waitFor(1000)
//         })

//         it('loads the page', async () => {
//             await page.waitForXPath('//div[contains(text(), "Amet aliquam id diam maecenas ultricies mi eget.")]')
//             await page.waitForXPath('//div[contains(text(), "Magna fringilla urna porttitor rhoncus dolor.")]')
//         }, 10000)

//         it('Podcast Categories: Subscribed', async () => {
//             await testDropdownItemSelect(page, "All Podcasts", "Subscribed")
//         }, 10000)

//         it('Podcast Categories: All Podcasts', async () => {
//             await testDropdownItemSelect(page, "Subscribed", "All Podcasts")
//         }, 10000)

//         it('Podcast Categories: Arts', async () => {
//             await testDropdownItemSelect(page, "All Podcasts", "Arts")
//         }, 10000)

//         it('Podcast Categories: Business', async () => {
//             await testDropdownItemSelect(page, "Arts", "Business")
//         }, 10000)

//         it('Podcast Categories: Comedy', async () => {
//             await testDropdownItemSelect(page, "Business", "Comedy")
//         }, 10000)

//         it('Podcast Categories: Education', async () => {
//             await testDropdownItemSelect(page, "Comedy", "Education")
//         }, 10000)

//         it('Podcast Categories: Games & Hobbies', async () => {
//             await testDropdownItemSelect(page, "Education", "Games & Hobbies")
//         }, 10000)

//         it('Podcast Categories: Government & Organizations', async () => {
//             await testDropdownItemSelect(page, "Games & Hobbies", "Government & Organizations")
//         }, 10000)

//         it('Podcast Categories: Health', async () => {
//             await testDropdownItemSelect(page, "Government & Organizations", "Health")
//         }, 10000)

//         it('Podcast Categories: Music', async () => {
//             await testDropdownItemSelect(page, "Health", "Music")
//         }, 10000)

//         it('Podcast Categories: News & Politics', async () => {
//             await testDropdownItemSelect(page, "Music", "News & Politics")
//         }, 10000)

//         it('Podcast Categories: Religion & Spirituality', async () => {
//             await testDropdownItemSelect(page, "News & Politics", "Religion & Spirituality")
//         }, 10000)

//         it('Podcast Categories: Science & Medicine', async () => {
//             await testDropdownItemSelect(page, "Religion & Spirituality", "Science & Medicine")
//         }, 10000)

//         it('Podcast Categories: Society & Culture', async () => {
//             await testDropdownItemSelect(page, "Science & Medicine", "Society & Culture")
//         }, 10000)

//         it('Home Page: Sort ► Most Recent', async () => {
//             await testDropdownItemSelect(page, "top - past week", "most recent")
//         })

//         it('Home Page: Sort ► Top Past Day', async () => {
//             await testDropdownItemSelect(page, "most recent", "top - past day")
//         })

//         it('Home Page: Sort ► Top Past Week', async () => {
//             await testDropdownItemSelect(page, "top - past day", "top - past week")
//         })

//         it('Home Page: Sort ► Top Past Month', async () => {
//             await testDropdownItemSelect(page, "top - past week", "top - past month")
//         })

//         it('Home Page: Sort ► Top Past Year', async () => {
//             await testDropdownItemSelect(page, "top - past month", "top - past year")
//         })

//         it('Home Page: Sort ► Top All Time', async () => {
//             await testDropdownItemSelect(page, "top - past year", "top - all time")
//         })

//         it('Home Page: Sort ► Random', async () => {
//             await testDropdownItemSelect(page, "top - all time", "random")
//         })

//         it('Home Page: Shared Meta Tags', async () => {
//             await testSharedMetaTags(page)
//         })

//         it('Home Page: Page Meta Tags', async () => {
//             await testPageMetaTags(page, `Podverse - Create podcast highlights. Sync your podcasts across iOS, Android, and web. Open source technology.`, `Podcast app for iOS, Android, and web. Create and share podcast highlights and playlists. Sync your queue across all devices. Open source software.`)
//         })

//     }, 60000)