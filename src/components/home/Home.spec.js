import { shallow } from '@vue/test-utils'
import App from './Home'

describe('App', () => {
    test('is a Vue instance', () => {
        const wrapper = shallow(App)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})