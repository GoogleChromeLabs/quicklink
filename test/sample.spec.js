describe('quicklink tests', function () {
  let page;

  before(async function () {
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:8080/demo/index.html');
  });

  after(async function () {
    await page.close();
  });

  it('should have the correct page title', async function () {
    expect(await page.title()).to.eql('Prefetch experiments');
  });

  it('should prefetch pages correctly', async function () {
    const responseURLs = [];
    page.on('response', resp => {
      responseURLs.push(resp.url());
    });
    await page.goto('http://127.0.0.1:8080/demo/index.html');
    await page.waitFor(1000);
    expect(responseURLs).to.be.an('array');
    expect(responseURLs).to.include('http://127.0.0.1:8080/demo/2.html');
    expect(responseURLs).to.include('http://127.0.0.1:8080/demo/2.html');
    expect(responseURLs).to.include('http://127.0.0.1:8080/demo/3.html');
  });
});
