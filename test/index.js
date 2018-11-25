import quicklink from '../src/index.mjs';
import quicklinkDist from '../dist/quicklink.mjs';

describe('quicklink', () => {
  it('should be a function', () => {
    expect(quicklink).toEqual(expect.any(Function));
  });
  it('should be compiled correctly', () => {
    expect(quicklinkDist).toEqual(expect.any(Function));
    expect(quicklinkDist).toHaveLength(1);
  });
  describe('prefetching', () => {
    it('custom list of URLs', () => {
      const p = quicklinkDist({urls: ['1.html', '2.html']});
      p.then(r => {
        expect(r.toHaveLength(2));
      });
    });
  });
});


