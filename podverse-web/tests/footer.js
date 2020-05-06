// const { getTestOrigin } = require('../utility')
// const origin = getTestOrigin()

// describe(
//     '/ (Footer)',
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

//         it('Load Homepage', async () => {
//             await page.goto(origin)
//             await page.waitForXPath("//a[contains(text(), 'Podverse')]")
//         }, 40000)

//         it('Dark Mode ► Light Mode', async () => {
//             await page.waitForXPath('//html[@data-theme="dark"]')
//             await page.click('.react-switch-bg')
//             await page.waitForXPath('//html[@data-theme="light"]')
//         })

//         it('Contact Button Loads Properly', async () => {
//             await page.waitForXPath('//a[@href="https://goo.gl/forms/BK9WPAsK1q6xD4Xw1"]')
//         })

//         it('Open Source Button Loads Properly', async () => {
//             await page.waitForXPath('//a[@href="https://www.gnu.org/licenses/agpl-3.0.en.html"]')
//         })

//         it('Social Media: Reddit Button Loads Properly', async () => {
//             await page.waitForXPath('//a[@href="https://reddit.com/r/podverse"]')
//         })

//         it('Social Media: Twitter Button Loads Properly', async () => {
//             await page.waitForXPath('//a[@href="https://twitter.com/podverse"]')
//         })

//         it('Social Media: Facebook Button Loads Properly', async () => {
//             await page.waitForXPath('//a[@href="https://facebook.com/podverse"]')
//         })

//         it('Social Media: Github Button Loads Properly', async () => {
//             await page.waitForXPath('//a[@href="https://github.com/podverse"]')
//         })

//     })