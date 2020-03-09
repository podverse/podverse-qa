const timeout = 20000

let webOrigin = ''

if (process.env.NODE_ENV === 'stage') {
  webOrigin = `https://${process.env.WEB_HOST}`
} else {
  webOrigin = `http://${process.env.WEB_HOST}:${process.env.WEB_PORT}`
}

console.log('web origin', webOrigin)

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto(webOrigin)
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('Podverse')
    })
  },
  timeout
)
