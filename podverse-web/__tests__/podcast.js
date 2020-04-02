const { checkElementExistsByXPath, getTestOrigin, testSharedMetaTags } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Podcast Page)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto(origin + '/podcast/Yqft_RG8j')
            await page.waitForXPath("//a[contains(text(), 'Podverse')]")
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        describe(
            '/ (Meta tags)',
            () => {
                it.only('has all the expected metatags', async () => {
                    await testSharedMetaTags(page)
                    await checkElementExistsByXPath(page, '//meta[@name="title"][@content="Very Bad Wizards"]')





                })
            }
        )

    }
)