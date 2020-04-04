// import expectPuppeteer from 'expect-puppeteer'

const { getTestOrigin, scrollIntoView } = require('../utility')
const origin = getTestOrigin()

describe(
    '/ (Smoke Tests)',
    () => {

        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
        })

        afterAll(async () => {
            await page.close()
            await page.waitFor(1000)
        })

        describe(
            '/ (Pages)',
            () => {

                it('Load Homepage', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 40000)

                it('About Page: footer link', async () => {
                    await page.click('.footer-bottom__link[href="/about"]')
                    await page.waitForXPath("//h3[contains(text(), 'About')]")
                }, 10000)

                it('Terms Page: footer link', async () => {
                    await page.click('.footer-bottom__link[href="/terms"]')
                    await page.waitForXPath("//h3[contains(text(), 'Terms of Service')]")
                }, 10000)

                it('Premium Page: footer link', async () => {
                    await page.click('.footer-bottom__link[href="/membership"]')
                    await page.waitForXPath("//h3[contains(text(), 'Premium')]")
                }, 10000)

                it('Search Page: magnifying glass link', async () => {
                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][@href="/search"]')
                    await elements[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Search')]")
                    await page.focus('.search__input')
                    await page.keyboard.type('Very Bad Wizards')
                    await page.click('.search__input-btn')
                }, 10000)

                it('Podcasts Page: header link', async () => {
                    await page.click('.nav-link[href="/podcasts"]')
                    await page.waitForXPath("//h3[contains(text(), 'Podcasts')]")
                }, 10000)

                it('Settings Page: dropdown ► settings link', async () => {
                    await page.click('.dropdown-toggle')
                    await page.click('.dropdown-item[href="/settings"]')
                    await page.waitForXPath("//h3[contains(text(), 'Interface')]")
                }, 10000)
            }, 60000)

        describe(
            '/ (Dropdowns)',
            () => {

                it('Load Homepage', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 35000)

                it('Homepage Dropdowns: Clips ► Episodes', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Clips")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Episodes")]')
                    await elements2[0].click();
                    await page.waitForXPath('//div[@class="no-results-msg"]')
                })

                it('Homepage Dropdowns: Episodes ► Clips', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Episodes")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Clips")]')
                    await elements2[0].click();
                    await page.waitForXPath("//div[contains(text(), 'Amet aliquam id diam maecenas ultricies mi eget')]")
                })

                it('Homepage Drop Downs: All podcasts ► Subscribed', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "All podcasts")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Subscribed")]')
                    await expect(elements2[0]).toBeTruthy()
                })

                describe(
                    '/ (Podcast Sorting Dropdowns)',
                    () => {

                        it('Sorting Dropdowns: Sort ► Most Recent', async () => {
                            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
                            await elements1[0].click();
                            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "most recent")]')
                            await elements2[0].click();
                            await page.waitForXPath("//button[contains(text(), 'most recent')]")
                        })

                        it('Sorting Dropdowns: Sort ► Top Past Day', async () => {
                            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "most recent")]')
                            await elements1[0].click();
                            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past day")]')
                            await elements2[0].click();
                            await page.waitForXPath("//button[contains(text(), 'top - past day')]")
                        })

                        it('Sorting Dropdowns: Sort ► Top Past Month', async () => {
                            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past day")]')
                            await elements1[0].click();
                            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past month")]')
                            await elements2[0].click();
                            await page.waitForXPath("//button[contains(text(), 'top - past month')]")
                        })

                        it('Sorting Dropdowns: Sort ► Top Past Year', async () => {
                            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past month")]')
                            await elements1[0].click();
                            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past year")]')
                            await elements2[0].click();
                            await page.waitForXPath("//button[contains(text(), 'top - past year')]")
                        })

                        it('Sorting Dropdowns: Sort ► Top All Time', async () => {
                            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past year")]')
                            await elements1[0].click();
                            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - all time")]')
                            await elements2[0].click();
                            await page.waitForXPath("//button[contains(text(), 'top - all time')]")
                        })

                        it('Sorting Dropdowns: Sort ► Random', async () => {
                            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - all time")]')
                            await elements1[0].click();
                            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "random")]')
                            await elements2[0].click();
                            await page.waitForXPath("//button[contains(text(), 'random')]")
                        })

                        it('Sorting Dropdowns: Sort ► Top Past Week', async () => {
                            const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "random")]')
                            await elements1[0].click();
                            const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
                            await elements2[0].click();
                            await page.waitForXPath("//button[contains(text(), 'top - past week')]")
                        })


                    })

            }, 60000)

        describe(
            '/ (Modals)',
            () => {

                it('Login Modal: header link', async () => {
                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Login')]")
                })

                it('Sign Up Modal: login modal link', async () => {
                    await page.click('.login-modal__sign-up')
                    await page.waitForXPath("//h3[contains(text(), 'Sign Up')]")
                    await page.click('.close-btn')
                })

                it('Forgot? Modal: login modal link', async () => {
                    const elements = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][contains (text(), "Login")]')
                    await elements[0].click();
                    await page.click('.login-modal__forgot')
                    await page.waitForXPath("//h3[contains(text(), 'Forgot Password')]")
                    await page.click('.close-btn')
                })

                it('Queue Modal: media bar link', async () => {
                    await page.click('.mp-header__queue')
                    await page.waitForXPath("//h3[contains(text(), 'Queue')]")
                    await page.click('.close-btn')
                })


                it('Clip Modal: media bar link', async () => {
                    await page.click('.mp-header__clip')
                    await page.waitForXPath("//h3[contains(text(), 'Make Clip')]")
                    await page.click('.make-clip-modal__cancel')
                })

                it('Add To Modal: media bar link', async () => {
                    await page.click('.mp-header__add')
                    await page.waitForXPath("//h3[contains(text(), 'Add To')]")
                    await page.click('.close-btn')
                })

                it('Share Modal: media bar link', async () => {
                    await page.click('.mp-header__share')
                    await page.waitForXPath("//h3[contains(text(), 'Share')]")
                    await page.click('.close-btn')
                })

            }, 60000)

        describe(
            '/ (Podcast Page)',
            () => {
                it('Load Homepage', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 40000)

                it('Search and Navigate to Podcast', async () => {
                    const elements1 = await page.$x('//li[@class="hide-mobile nav-item"]//a[@class="nav-link"][@href="/search"]')
                    await elements1[0].click();
                    await page.waitForXPath("//h3[contains(text(), 'Search')]")
                    await page.focus('.search__input')
                    await page.keyboard.type('Very Bad Wizards')
                    await page.click('.search__input-btn')
                    await page.waitFor(1000)
                    const elements2 = await page.$x('//div[@class="media-list-item-b__title"][contains (text(), "Very Bad Wizards")]')
                    await elements2[0].click();
                    await page.waitForXPath('//div[@class="media-header__sub-title"][contains(text(), "Tamler Sommers & David Pizarro")]')
                }, 20000)

                it('Podcast Page: Episodes ► Clips', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Episodes")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Clips")]')
                    await elements2[0].click();
                    await page.waitForXPath('//div[@class="media-list-item-a__title"][contains(text(), "Lacus sed turpis tincidunt id aliquet risus feugiat in ante.")]')
                })

                it('Podcast Page: Clips ► Episodes', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "Clips")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "Episodes")]')

                    console.log('podcast page element', elements2[0])

                    await elements2[0].click();
                    await page.waitForXPath('//div[@class="media-list-item-a__title"][contains(text(), "Episode 1: Brains, Robots, and Free Will (Free Will and Morality Pt. 1)")]')
                })

                it('Podcast Page: Sort ► Most Recent', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "most recent")]')
                    await elements2[0].click();
                    await page.waitForXPath("//button[contains(text(), 'most recent')]")
                })

                it('Podcast Page: Sort ► Top Past Day', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "most recent")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past day")]')
                    await elements2[0].click();
                    await page.waitForXPath("//button[contains(text(), 'top - past day')]")
                })

                it('Podcast Page: Sort ► Top Past Week', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past day")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
                    await elements2[0].click();
                    await page.waitForXPath("//button[contains(text(), 'top - past week')]")
                })

                it('Podcast Page: Sort ► Top Past Month', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past week")]')
                    await elements1[0].click();
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past month")]')
                    await elements2[0].click();
                    await page.waitForXPath("//button[contains(text(), 'top - past month')]")
                }, 10000)

                it('Podcast Page: Sort ► Top Past Year', async () => {
                    const elements1 = await page.$x('//button[@class="transparent dropdown-toggle btn btn-secondary"][contains (text(), "top - past month")]')
                    await elements1[0].click();
                    console.log('asdf', elements1)
                    const elements2 = await page.$x('//button[@class="dropdown-item"][contains (text(), "top - past week")]')
                    console.log('zxcv', elements2)
                    await elements2[0].click();
                    await page.waitForXPath("//button[contains(text(), 'top - past week')]")
                }, 10000)

                it('Podcast Page: Page 2 of Past Year', async () => {
                    await page.waitFor(2000)
                    await scrollIntoView(page, '.pagination')
                    const elements = await page.$x('//button[@class="page-link"][contains (text(), "2")]')
                    await elements[0].click();
                    await page.waitFor(2000)
                    await page.waitForXPath('//div[@class="media-list-item-a__title"][contains(text(), "Episode 123: What Chilling Effect? (Intelligence Pt. 2)")]')
                }, 15000)

            })


        describe(
            '/ (Misc)',
            () => {
                it('Load Homepage', async () => {
                    await page.goto(origin)
                    await page.waitForXPath("//a[contains(text(), 'Podverse')]")
                }, 40000)

                it('Dark Mode ► Light Mode', async () => {
                    await page.waitForXPath('//html[@data-theme="dark"]')
                    await page.click('.react-switch-bg')
                    await page.waitForXPath('//html[@data-theme="light"]')
                })

            })
    },
    20000
)

