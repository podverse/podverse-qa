const { getTestOrigin, scrollIntoView } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Home Page)',
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

        it('loads the page', async () => {
            await page.waitForXPath('//div[contains(text(), "Amet aliquam id diam maecenas ultricies mi eget.")]')
            await page.waitForXPath('//div[contains(text(), "Magna fringilla urna porttitor rhoncus dolor.")]')
        }, 10000)

        it('Podcast Categories: Subscribed', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "All Podcasts")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Subscribed")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Subscribed")]')
        }, 10000)

        it('Podcast Categories: All Podcasts', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Subscribed")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "All Podcasts")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "All Podcasts")]')
        }, 10000)

        it('Podcast Categories: Arts', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "All Podcasts")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Arts")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Arts")]')
        }, 10000)

        it('Podcast Categories: Business', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Arts")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Business")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Business")]')
        }, 10000)

        it('Podcast Categories: Comedy', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Business")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Comedy")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Comedy")]')
        }, 10000)

        it('Podcast Categories: Education', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Comedy")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Education")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Education")]')
        }, 10000)

        it('Podcast Categories: Games & Hobbies', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Education")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Games & Hobbies")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Games & Hobbies")]')
        }, 10000)

        it('Podcast Categories: Government & Organizations', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Games & Hobbies")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Government & Organizations")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Government & Organizations")]')
        }, 10000)

        it('Podcast Categories: Health', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Government & Organizations")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Health")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Health")]')
        }, 10000)

        it('Podcast Categories: Music', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Health")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Music")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Music")]')
        }, 10000)

        it('Podcast Categories: News & Politics', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Music")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "News & Politics")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "News & Politics")]')
        }, 10000)

        it('Podcast Categories: Religion & Spirituality', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "News & Politics")]')
            await elements1[0].click();
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Religion & Spirituality")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Religion & Spirituality")]')
        }, 10000)

        it('Podcast Categories: Science & Medicine', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Religion & Spirituality")]')
            await elements1[0].click();
            await page.waitFor(2000)
            await scrollIntoView(page, '.pv-divider')
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Science & Medicine")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Science & Medicine")]')
        }, 10000)

        it('Podcast Categories: Society & Culture', async () => {
            await page.waitFor(100)
            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Science & Medicine")]')
            await elements1[0].click();
            await page.waitFor(2000)
            await scrollIntoView(page, '.footer')
            await page.waitFor(100)
            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Society & Culture")]')
            await elements2[0].click();
            await page.waitForXPath('//button[contains(text(), "Society & Culture")]')
        }, 10000)





    }, 60000)