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
            '/ (Premium valid)',
            () => {

                it.only('Login: Free Trial Valid', async () => {

                    const elements1 = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements1[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('freetrial@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(3000)
                    const elements2 = await page.$x('//li[@class="dropdown nav-item"]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    const elements3 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//a[@class="dropdown-item"][contains (text(), "My Profile")]')
                    await elements3[0].click();
                    await page.waitFor(500)
                    await page.waitForXPath('//div[@class="media-header__title"][contains (text(), "Free Trial Valid - Test User")]')
                }, 10000)

                it.only('Log out and go to Home page', async () => {
                    const elements1 = await page.$x('//li[@class="dropdown nav-item"]')
                    await elements1[0].click();
                    await page.waitFor(500)
                    const elements2 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//button[@class="dropdown-item"][contains (text(), "Log out")]')
                    await elements2[0].click();
                    await page.waitForXPath('//div[@class="media-header__title"][contains (text(), "anonymous")]')
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 60000)

                it.only('Login: Free Trial Expired', async () => {

                    const elements1 = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements1[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('freetrialexpired@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(3000)
                    const elements2 = await page.$x('//li[@class="dropdown nav-item"]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    const elements3 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//a[@class="dropdown-item"][contains (text(), "My Profile")]')
                    await elements3[0].click();
                    await page.waitFor(500)
                    await page.waitForXPath('//div[@class="media-header__title"][contains (text(), "Free Trial Expired - Test User")]')
                }, 10000)

                it.only('Log out and go to Home page', async () => {
                    const elements1 = await page.$x('//li[@class="dropdown nav-item"]')
                    await elements1[0].click();
                    await page.waitFor(500)
                    const elements2 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//button[@class="dropdown-item"][contains (text(), "Log out")]')
                    await elements2[0].click();
                    await page.waitForXPath('//div[@class="media-header__title"][contains (text(), "anonymous")]')
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 60000)

                it.only('Login: Premium Valid', async () => {

                    const elements1 = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements1[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('premium@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(3000)
                    const elements2 = await page.$x('//li[@class="dropdown nav-item"]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    const elements3 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//a[@class="dropdown-item"][contains (text(), "My Profile")]')
                    await elements3[0].click();
                    await page.waitFor(500)
                    await page.waitForXPath('//div[@class="media-header__title"][contains (text(), "Premium Valid - Test User")]')
                }, 10000)

                it.only('Log out and go to Home page', async () => {
                    const elements1 = await page.$x('//li[@class="dropdown nav-item"]')
                    await elements1[0].click();
                    await page.waitFor(500)
                    const elements2 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//button[@class="dropdown-item"][contains (text(), "Log out")]')
                    await elements2[0].click();
                    await page.waitForXPath('//div[@class="media-header__title"][contains (text(), "anonymous")]')
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 60000)

                it.only('Login: Premium Expired', async () => {

                    const elements1 = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements1[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__email]')
                    await page.keyboard.type('premiumexpired@stage.podverse.fm')
                    await page.waitFor(500)
                    await page.focus('.form-control[name=login-modal__password]')
                    await page.keyboard.type('Aa!1asdf')
                    await page.waitFor(500)
                    await page.click('.login-modal-btns-right__login.btn.btn-primary')
                    await page.waitFor(3000)
                    const elements2 = await page.$x('//li[@class="dropdown nav-item"]')
                    await elements2[0].click();
                    await page.waitFor(500)
                    const elements3 = await page.$x('//div[@class="dropdown-menu dropdown-menu-right show"]//a[@class="dropdown-item"][contains (text(), "My Profile")]')
                    await elements3[0].click();
                    await page.waitFor(500)
                    await page.waitForXPath('//div[@class="media-header__title"][contains (text(), "Premium Expired - Test User")]')
                }, 10000)


            }
        )

    }
)