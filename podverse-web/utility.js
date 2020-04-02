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
    await checkElementExistsByXPath(page, '//meta[@name="twitter:site"][@content="@podverse"]')

    // await page.waitForXPath('//meta[@name="twitter:site:id"][@content="2555941009"]')
    // await page.waitForXPath('//meta[@name="twitter:creator"][@content="@podverse"]')
    // await page.waitForXPath('//meta[@name="twitter:creator:id"][@content="2555941009"]')
    // await page.waitForXPath('//meta[@name="twitter:app:name:iphone"][@content="Podverse"]')
    // await page.waitForXPath('//meta[@name="twitter:app:id:iphone"][@content="1390888454"]')
    // await page.waitForXPath('//meta[@name="twitter:card"][@content="summary_large_image"]')
    // await page.waitForXPath('//meta[@name="title"][@content="Podverse - Create podcast highlights. Sync your podcasts across iOS, Android, and web. Open source technology."]')
    // await page.waitForXPath('//meta[@name="description"][@content="Podcast app for iOS, Android, and web. Create and share podcast highlights and playlists. Sync your queue across all devices. Open source software."]')
    // await page.waitForXPath('//meta[@property="og:title"][@content="Podverse - Create podcast highlights. Sync your podcasts across iOS, Android, and web. Open source technology."]')
    // await page.waitForXPath('//meta[@property="og:image"][@content="https://podverse.fm/images/podverse-logo-1200x630.png"]')
    // await page.waitForXPath('//meta[@property="og:image:secure_url"][@content="https://podverse.fm/images/podverse-logo-1200x630.png"]')
    // await page.waitForXPath('//meta[@property="og:description"][@content="Podcast app for iOS, Android, and web. Create and share podcast highlights and playlists. Sync your queue across all devices. Open source software."]')

    // // await page.waitForXPath('//meta[@property="og:url"][@content="https://stage.podverse.fm/clip/9rA5BhWp"]') 
    // // Sometimes empty?

    // await page.waitForXPath('//meta[@name="twitter:description"][@content="Podcast app for iOS, Android, and web. Create and share podcast highlights and playlists. Sync your queue across all devices. Open source software."]')
    // await page.waitForXPath('//meta[@name="twitter:title"][@content="Podverse - Create podcast highlights. Sync your podcasts across iOS, Android, and web. Open source technology."]')
    // await page.waitForXPath('//meta[@name="twitter:image"][@content="https://podverse.fm/images/podverse-logo-1200x630.png"]')
    // await page.waitForXPath('//meta[@name="twitter:image:alt"][@content="Podverse logo"]')
}

module.exports = {
    checkElementExistsByXPath,
    getTestOrigin,
    scrollIntoView,
    testSharedMetaTags
}