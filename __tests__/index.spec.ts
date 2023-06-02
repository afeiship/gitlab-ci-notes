import minaDeploy from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    minaDeploy({
      appid: 'wxct2s4pCZrukShm4H3',
      projectPath: './dist/build/mp-weixin',
      robot:1,
      version: '1.0.0'
    });
    // expect(fn({ rel: true })).toBe(undefined);
  });
});
