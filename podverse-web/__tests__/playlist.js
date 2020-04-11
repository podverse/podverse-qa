const { getTestOrigin } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Playlist Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin)
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

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
        }, 10000)

        it('loads the page', async () => {
            await page.waitFor(500)
            await page.goto(origin + '/playlist/-67KgiG1')
            await page.waitForXPath('//div[contains(text(), "Diam quis enim lobortis scelerisque fermentum dui faucibus.")]')
        }, 10000)

    }, 60000)