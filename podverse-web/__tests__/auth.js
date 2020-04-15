// import expectPuppeteer from 'expect-puppeteer'
const { getTestOrigin, testLoginModal, testLogOut } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (User login tests)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin)
            await page.waitForXPath("//a[contains(text(), 'Podverse')]")
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        describe(
            '/ (Account Types)',
            () => {

                it('Login: Free Trial', async () => {
                    await testLoginModal(page, "freetrial@stage.podverse.fm")
                }, 10000)

                it('Free Trial: Valid', async () => {
                    const elements = await page.$x('//button[@class="dropdown-item"][contains (text(), "Subscribed")]')
                    expect(elements[0]).toBeTruthy()
                    await page.waitFor(500)
                })

                it('Log out and go to Home page', async () => {
                    await testLogOut(page)
                }, 60000)

                it('Login: Free Trial Expired', async () => {
                    await testLoginModal(page, "freetrialexpired@stage.podverse.fm")
                }, 10000)

                it('Free Trial: Expired', async () => {
                    await page.waitForXPath('//div[@class="alert alert-danger alert-dismissible show"][contains (text(), "Your free trial has ended.")]')
                })

                it('Log out and go to Home page', async () => {
                    await testLogOut(page)
                }, 60000)

                it('Login: Premium Valid', async () => {
                    await testLoginModal(page, "premium@stage.podverse.fm")
                }, 10000)

                xit('Premium: Valid', async () => {
                    await page.waitFor(500)
                    const elements = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Subscribed")]')
                    expect(elements[0]).toBeTruthy()
                    await page.waitFor(500)
                }, 30000)

                it('Log out and go to Home page', async () => {
                    await testLogOut(page)
                }, 60000)

                it('Login: Premium Expired', async () => {
                    await testLoginModal(page, "premiumexpired@stage.podverse.fm")
                }, 10000)

                it('Premium: Expired', async () => {
                    await page.waitForXPath('//div[@class="alert alert-danger alert-dismissible show"][contains (text(), "Your membership has expired.")]')
                })

                it('Log out and go to Home page', async () => {
                    await testLogOut(page)
                }, 60000)

            }
        )

    }
)