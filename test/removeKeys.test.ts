import { expect } from 'chai'
import { removeKeys } from '../src/removeKeys'

describe('removeKeys', () => {
  it('removes selected keys', () => {
    const input = { a: 1, b: { x: 2, y: 3 } }
    const output = removeKeys(input, ['a', 'c'])
    expect(output).to.deep.eq({ b: { x: 2, y: 3 } })
  })
})
