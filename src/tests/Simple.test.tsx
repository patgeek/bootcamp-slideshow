import {testSimpleSlide} from './TestFixtures';
import { shallow } from 'enzyme';
import { expect } from 'chai'


describe("Simple slide renders", () => {
    it('should render the simple slide', () => {
        const wrapper = shallow(testSimpleSlide);
        expect(wrapper.find('h1').hasClass('mainTitle')
            && wrapper.find('p').hasClass('body')).to.equal(true);
    });
});