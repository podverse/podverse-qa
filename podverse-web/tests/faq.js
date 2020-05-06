// const { getTestOrigin, testPageMetaTags, testSharedMetaTags } = require('../utility')
// const origin = getTestOrigin()

// describe(
//     '/ (FAQ Page)',
//     () => {

//         let page
//         beforeAll(async () => {
//             page = await global.__BROWSER__.newPage()
//             await page.goto(origin + '/faq')
//         })

//         afterAll(async () => {
//             await page.close()
//             await page.waitFor(1000)
//         })

//         it('loads the page', async () => {
//             await page.waitForXPath('//h3[contains(text(), "FAQ")]')
//         }, 10000)

//         it('Episode Page: Shared Meta Tags', async () => {
//             await testSharedMetaTags(page)
//         })

//         it('Episode Page: Page Meta Tags', async () => {
//             await testPageMetaTags(page, `Podverse - FAQ`, `Podverse - Frequently asked questions`)
//         })

//     }, 60000)