// const { getTestOrigin, testPageMetaTags, testSharedMetaTags } = require('../utility')
// const origin = getTestOrigin()

// describe(
//     '/ (Terms Page)',
//     () => {

//         let page
//         beforeAll(async () => {
//             page = await global.__BROWSER__.newPage()
//             await page.goto(origin + '/terms')
//         })

//         afterAll(async () => {
//             await page.close()
//             await page.waitFor(1000)
//         })

//         it('loads the page', async () => {
//             await page.waitForXPath('//h3[contains(text(), "Terms of Service")]')
//         }, 10000)

//         it('Terms Page: Shared Meta Tags', async () => {
//             await testSharedMetaTags(page)
//         })

//         it('Terms Page: Page Meta Tags', async () => {
//             await testPageMetaTags(page, `Podverse - Terms of Service`, `Podverse terms of service agreement.`)
//         })

//     }, 60000)