import {testTitleSlide} from './TestFixtures';
import { shallow } from 'enzyme';
import { expect } from 'chai'


describe("Title slide renders", () => {
    it('should render the title slide', () => {
        const wrapper = shallow(testTitleSlide);
        expect(wrapper.find('h1').hasClass('mainTitle')
            && wrapper.find('h2').hasClass('subTitle')).to.equal(true);
    });
});