describe('quicklink tests', function () {
  const server = `http://127.0.0.1:8080/test`;
  let page;

  before(async function () {
    page = await browser.newPage();
    // await page.goto('http://127.0.0.1:8080/demo/index.html');
  });

  after(async function () {
    await page.close();
  });

  it('should prefetch in-viewport links correctly (UMD)', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-basic-usage.html`);
    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    expect(responseURLs).to.include(`${server}/1.html`);
    expect(responseURLs).to.include(`${server}/2.html`);
    expect(responseURLs).to.include(`${server}/3.html`);
  });

  it('should prefetch in-viewport links correctly (ES Modules)', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-es-modules.html`);
    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    expect(responseURLs).to.include(`${server}/1.html`);
    expect(responseURLs).to.include(`${server}/2.html`);
    expect(responseURLs).to.include(`${server}/3.html`);
  });

  it('should prefetch a static list of URLs correctly', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-static-url-list.html`);
    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    expect(responseURLs).to.include(`${server}/2.html`);
    expect(responseURLs).to.include(`${server}/4.html`);
  });

  it('should prefetch in-viewport links from a custom DOM source', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-custom-dom-source.html`);
    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    expect(responseURLs).to.include(`${server}/main.css`);
  });
});
