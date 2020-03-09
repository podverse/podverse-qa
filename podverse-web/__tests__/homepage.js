// const { getTestOrigin } = require('../utility')

// const timeout = 120000

// const origin = getTestOrigin()

// describe(
//   '/ (Home Page)',
//   () => {
//     let page
//     beforeAll(async () => {
//       page = await global.__BROWSER__.newPage()
//       await page.goto(origin)
//     }, timeout)

//     afterAll(async () => {
//       await page.close()
//     }, timeout)

//     it('should load without error', async () => {
//       let text = await page.evaluate(() => document.body.textContent)
//       expect(text).toContain('Podverse')
//     }, timeout)
//   },
//   timeout
// )
