// import expectPuppeteer from 'expect-puppeteer'
const { getTestOrigin } = require('../utility')
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
                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('freetrial@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(500)
                }, 10000)

                it('Free Trial: Valid', async () => {
                    const elements = await page.$x('//button[@class="dropdown-item"][contains (text(), "Subscribed")]')
                    expect(elements[0]).toBeTruthy()
                    await page.waitFor(500)
                })


                it('Log out and go to Home page', async () => {
                    await page.waitFor(500)
                    await page.goto(origin)
                    const elements1 = await page.$x('//ul[@class="ml-auto navbar-nav"]//li[@class="dropdown nav-item"]//button[@class="dropdown-toggle btn btn-secondary"]')
                    await elements1[0].click();
                    await page.waitFor(500)
                    const elements2 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//button[@class="dropdown-item"][contains (text(), "Log out")]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    await page.goto(origin)
                    await page.waitForXPath('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains(text(), "Login")]')
                }, 60000)

                it('Login: Free Trial Expired', async () => {

                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('freetrialexpired@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(500)
                }, 10000)

                it('Free Trial: Expired', async () => {
                    await page.waitForXPath('//div[@class="alert alert-danger alert-dismissible show"][contains (text(), "Your free trial has ended.")]')
                })


                it('Log out and go to Home page', async () => {
                    await page.waitFor(500)
                    await page.goto(origin)
                    const elements1 = await page.$x('//ul[@class="ml-auto navbar-nav"]//li[@class="dropdown nav-item"]//button[@class="dropdown-toggle btn btn-secondary"]')
                    await elements1[0].click();
                    await page.waitFor(500)
                    const elements2 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//button[@class="dropdown-item"][contains (text(), "Log out")]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    await page.goto(origin)
                    await page.waitForXPath('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains(text(), "Login")]')
                }, 60000)

                it('Login: Premium Valid', async () => {
                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('premium@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(500)
                }, 10000)

                it('Premium: Valid', async () => {
                    await page.waitFor(500)
                    const elements = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Subscribed")]')
                    expect(elements[0]).toBeTruthy()
                    await page.waitFor(500)
                }, 30000)


                it('Log out and go to Home page', async () => {
                    await page.waitFor(500)
                    await page.goto(origin)
                    const elements1 = await page.$x('//ul[@class="ml-auto navbar-nav"]//li[@class="dropdown nav-item"]//button[@class="dropdown-toggle btn btn-secondary"]')
                    await elements1[0].click();
                    await page.waitFor(500)
                    const elements2 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//button[@class="dropdown-item"][contains (text(), "Log out")]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    await page.goto(origin)
                    await page.waitForXPath('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains(text(), "Login")]')
                }, 60000)

                it('Login: Premium Expired', async () => {

                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('premiumexpired@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(500)
                }, 10000)

                it('Premium: Expired', async () => {
                    await page.waitForXPath('//div[@class="alert alert-danger alert-dismissible show"][contains (text(), "Your membership has expired.")]')
                })


                it('Log out and go to Home page', async () => {
                    await page.waitFor(500)
                    await page.goto(origin)
                    const elements1 = await page.$x('//ul[@class="ml-auto navbar-nav"]//li[@class="dropdown nav-item"]//button[@class="dropdown-toggle btn btn-secondary"]')
                    await elements1[0].click();
                    await page.waitFor(500)
                    const elements2 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//button[@class="dropdown-item"][contains (text(), "Log out")]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    await page.goto(origin)
                    await page.waitForXPath('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains(text(), "Login")]')
                }, 60000)



            }
        )

    }
)