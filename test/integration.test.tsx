import React from 'react'
import {bem, withPrefix} from '../src'
import {configure, shallow} from 'enzyme'
import {expect} from 'chai'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('integration', () => {
  const Component = bem.div('component', ['large', 'small'])

  it('no modifiers', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('div').prop('className')).to.eq('component')
  })

  it('one enabled modifier', () => {
    const wrapper = shallow(<Component large />)
    expect(wrapper.find('div').prop('className')).to.eq('component component--large')
  })

  it('two enabled modifiers', () => {
    const wrapper = shallow(<Component large small />)
    expect(wrapper.find('div').prop('className')).to.eq('component component--large component--small')
  })

  it('extra className', () => {
    const wrapper = shallow(<Component className="foo" />)
    expect(wrapper.find('div').prop('className')).to.eq('component foo')
  })

  describe('withPrefix', () => {
    const prefixed = withPrefix('app')
    const Component = prefixed.div('component', ['large', 'small'])

    it('no modifiers', () => {
      const wrapper = shallow(<Component />)
      expect(wrapper.find('div').prop('className')).to.eq('app-component')
    })

    it('one enabled modifier', () => {
      const wrapper = shallow(<Component large />)
      expect(wrapper.find('div').prop('className')).to.eq('app-component app-component--large')
    })

    it('extra className', () => {
      const wrapper = shallow(<Component className="foo" />)
      expect(wrapper.find('div').prop('className')).to.eq('app-component foo')
    })
  })

  it('does not pass modifiers downstream', () => {
    const wrapper = shallow(<Component large />)
    expect(wrapper.find('div').prop('large')).to.eq(undefined)
  })
})
