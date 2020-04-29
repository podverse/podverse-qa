var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var capabilities = {
    'device': 'Google Pixel 3',
    'os_version': '9.0'
}

Object.assign(capabilities, {
    'browserstack.user': process.env.BROWSERSTACK_USER,
    'browserstack.key': process.env.BROWSERSTACK_KEY,
    'project': 'Podverse - Mobile App - React Native',
    'build': 'Android',
    'name': 'Android',
    'app': process.env.BROWSERSTACK_APP
});

driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

const elementByIdAndClickAndTest = async (id, waitForElement) => {
    const element = await driver.elementByAccessibilityId(id)
    await element.click()
    await driver.waitForElementByAccessibilityId(waitForElement)
}

const runTests = async () => {
    try {
        console.log('init')
        await driver.init(capabilities)

        await driver.sleep(3000)

        await driver.waitForElementByAccessibilityId('alert_yes_allow_data')
        await elementByIdAndClickAndTest('alert_yes_allow_data', 'podcasts_screen_view')

        await elementByIdAndClickAndTest('tab_episodes_screen', 'episodes_screen_view')

        await driver.sleep(3000)

    } catch (error) {
        console.log('runTests', error)
    }

    await driver.quit()
}

runTests()