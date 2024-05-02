

import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search Vue Specs',()=>{
    let wrapper=null

    beforeEach(()=>{
        wrapper= shallowMount(Search)
    })

    afterEach(()=>{
        wrapper.destroy()
    })

    it('check with elements',()=>{
        expect(wrapper.name()).toMatch('Search')
    })

    it('check with h2',()=>{
        expect(wrapper.findAll('h2').length).toEqual(1)
        expect(wrapper.findAll('h2').at(0).text()).toMatch('Weather Search')
    })

    it('check with label',()=>{
        expect(wrapper.findAll('h2').length).toEqual(1)
        expect(wrapper.findAll('h2').at(0).text()).toMatch('Weather Search')
    })

    it('check with label value',()=>{
        expect(wrapper.findAll('label').length).toEqual(1)
        expect(wrapper.findAll('label').at(0).text()).toMatch('City:')
    })

    it('check with buttons value',()=>{
        expect(wrapper.findAll('button').length).toEqual(2)
        expect(wrapper.findAll('button').at(0).text()).toMatch('Search')
        expect(wrapper.findAll('button').at(1).text()).toMatch('Clear')
        expect(wrapper.findAll('button').at(0).element.disabled).toBeTruthy
        expect(wrapper.findAll('button').at(1).element.disabled).toBeTruthy



    })
    
    it('check text value',()=>{
       wrapper.setData({inputCity:'mumbai'})
       wrapper.vm.searchCity()
       expect(wrapper.emitted('search-city')[0][0]).toMatch('mumbai')
       expect(wrapper.vm.inputCity).toMatch('mumbai')
    })

})
 
