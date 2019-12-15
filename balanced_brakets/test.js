const solution = require('./index');

describe('solution', () => {
  it('solution function is defined', () => {
    expect(solution).toBeDefined();
  });

  it('solution should return YES', () => {
    expect(solution('[]')).toBe('YES');
  });

  it('solution should return NO', () => {
    expect(solution('[}]')).toBe('NO');
  });

  it('solution should return NO', () => {
    expect(solution('[[]()}]')).toBe('NO');
  });
});
