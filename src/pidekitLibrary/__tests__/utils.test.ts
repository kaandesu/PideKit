import { cn } from '../utils/'
describe('cn test', () => {
  it('should merge keys into a single string conditionally', () => {
    const result: string = cn('foo', 'bar', { baz: true, fiz: false }, ['qux'])
    expect(result).toBe('foo bar baz qux')
  })
})
