import { Greeter } from '../src';

describe('Greeter', () => {
  test('greet', () => {
    expect(Greeter('Joey')).toBe('Hello Joey');
  });
});
