import { expect } from 'chai'
import { getClassName } from '../src/getClassName'

describe('getClassName', () => {
  it('no modifiers', () => {
    expect(getClassName(
      'block',
      {},
      {}
    )).to.eq('block')
  })

  it('all modifiers are disabled', () => {
    expect(getClassName(
      'block',
      { foo: 'block--foo', bar: 'block--foo' },
      {}
    )).to.eq('block')
  })

  it('one enabled modifier', () => {
    expect(getClassName(
      'block',
      { foo: 'block--foo', bar: 'block--foo' },
      { foo: true }
    )).to.eq('block block--foo')
  })

  it('with additional className', () => {
    expect(getClassName(
      'block',
      { foo: 'block--foo', bar: 'block--foo' },
      { foo: true, className: 'baz' }
    )).to.eq('block block--foo baz')
  })
})
