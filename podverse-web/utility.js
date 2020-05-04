const chalk = require('chalk')

const getTestOrigin = () => {
    if (process.env.NODE_ENV === 'stage') {
        return `https://stage.podverse.fm`
    } else {
        return `http://localhost:8765`
    }
}

const scrollIntoView = async (page, querySelector) => {
    await page.evaluate((querySelector) => {
        document.querySelector(querySelector).scrollIntoView()
    }, querySelector)
}

const checkElementExistsByXPath = async (page, xpath) => {
    const elements = await page.$x(xpath)

    if (!elements[0]) {
        console.log(chalk.magenta('checkElementExistsByXPath'), xpath)
    }

    expect(elements[0]).toBeTruthy()
}

const testSharedMetaTags = async (page) => {
    try {
        await checkElementExistsByXPath(page, '//meta[@name="twitter:site"][@content="@podverse"]')
        await checkElementExistsByXPath(page, '//meta[@name="twitter:site:id"][@content="2555941009"]')
        await checkElementExistsByXPath(page, '//meta[@name="twitter:creator"][@content="@podverse"]')
        await checkElementExistsByXPath(page, '//meta[@name="twitter:creator:id"][@content="2555941009"]')
        await checkElementExistsByXPath(page, '//meta[@name="twitter:app:name:iphone"][@content="Podverse"]')
        await checkElementExistsByXPath(page, '//meta[@name="twitter:app:id:iphone"][@content="1390888454"]')
        await checkElementExistsByXPath(page, '//meta[@name="twitter:card"][@content="summary_large_image"]')
    } catch (error) {
        console.log('testSharedMetaTags', error.matcherResult.message)
        throw error
    }
}

const testDropdownItemSelect = async (page, element1Text, element2Text) => {
    await page.waitFor(1000)
    const elements1 = await page.$x(`//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "${element1Text}")]`)
    await elements1[0].click();
    const elements2 = await page.$x(`//button[@class="dropdown-item"][contains (text(), "${element2Text}")]`)
    await elements2[0].click();
    await page.waitForXPath(`//button[contains(text(), "${element2Text}")]`)
}

const testLoginModal = async (page, email) => {
    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
    await elements[0].click();
    await page.waitForXPath("//h3[contains(text(), 'Login')]")
    await page.waitFor(500)
    await page.focus('.form-control[name=login-modal__email]')
    await page.keyboard.type(email)
    await page.waitFor(500)
    await page.focus('.form-control[name=login-modal__password]')
    await page.keyboard.type('Aa!1asdf')
    await page.waitFor(500)
    await page.click('.login-modal-btns-right__login.btn.btn-primary')
    await page.waitFor(500)
}

const testLogOut = async (page) => {
    const origin = getTestOrigin()
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
}

module.exports = {
    checkElementExistsByXPath,
    getTestOrigin,
    scrollIntoView,
    testDropdownItemSelect,
    testLoginModal,
    testLogOut,
    testSharedMetaTags
}