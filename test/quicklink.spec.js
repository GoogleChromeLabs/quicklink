describe('quicklink tests', function () {
  const server = `http://127.0.0.1:8080/test`;
  let page;

  before(async function () {
    page = await browser.newPage();
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

  it('should prefetch in-viewport links that scroll into view correctly (UMD)', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-basic-usage.html`);
    await page.setViewport({
      width: 1200,
      height: 800,
    });
    await page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    expect(responseURLs).to.include(`${server}/1.html`);
    expect(responseURLs).to.include(`${server}/2.html`);
    expect(responseURLs).to.include(`${server}/3.html`);
    expect(responseURLs).to.include(`${server}/4.html`);
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

  it('should only prefetch links if allowed in origins list', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-allow-origin.html`);

    await page.waitFor(1000);

    expect(responseURLs).to.be.an('array');
    // => origins: ['github.githubassets.com']
    expect(responseURLs).to.not.include(`${server}/2.html`);
    expect(responseURLs).to.include('https://example.com/1.html');
    expect(responseURLs).to.include('https://github.githubassets.com/images/spinners/octocat-spinner-32.gif');
  });

  it('should prefetch all links when allowing all origins', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-allow-origin-all.html`);

    await page.waitFor(1000);

    expect(responseURLs).to.be.an('array');
    // => origins: true
    expect(responseURLs).to.include(`${server}/2.html`);
    expect(responseURLs).to.include('https://foobar.com/3.html');
    expect(responseURLs).to.include('https://example.com/1.html');
    expect(responseURLs).to.include('https://github.githubassets.com/images/spinners/octocat-spinner-32.gif');
  });

  it('should only prefetch links of same origin (default)', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-same-origin.html`);

    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    // => origins: [location.hostname] (default)
    expect(responseURLs).to.include(`${server}/2.html`);
    expect(responseURLs).to.not.include('https://example.com/1.html');
    expect(responseURLs).to.not.include('https://github.githubassets.com/images/spinners/octocat-spinner-32.gif');
  });

  it('should only prefetch links after ignore patterns allowed it', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-ignore-basic.html`);

    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    // => origins: [location.hostname] (default)
    // => ignores: /2.html/
    // via ignores
    expect(responseURLs).to.not.include(`${server}/2.html`);
    // via same origin
    expect(responseURLs).to.not.include('https://example.com/1.html');
    // via same origin
    expect(responseURLs).to.not.include('https://github.githubassets.com/images/spinners/octocat-spinner-32.gif');
  });

  it('should only prefetch links after ignore patterns allowed it (multiple)', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto(`${server}/test-ignore-multiple.html`);

    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    // => origins: true (all)
    // => ignores: [...]
    expect(responseURLs).to.include(`${server}/2.html`);
    // /example/
    expect(responseURLs).to.not.include('https://example.com/1.html');
    // (uri) => uri.includes('foobar')
    expect(responseURLs).to.not.include('https://foobar.com/3.html');
    // (uri, elem) => elem.textContent.includes('Spinner')
    expect(responseURLs).to.not.include('https://github.githubassets.com/images/spinners/octocat-spinner-32.gif');
  });
});
