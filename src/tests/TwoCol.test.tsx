import {testTwoColSlide} from './TestFixtures';
import { shallow } from 'enzyme';
import { expect } from 'chai'


describe("TwoCol slide renders", () => {
    it('should render the two column slide', () => {
        const wrapper = shallow(testTwoColSlide);
        expect(wrapper.find('h1').hasClass('mainTitle')).to.equal(true);
        expect(wrapper.find(".leftcol")).to.have.length(1);
        expect(wrapper.find(".rightcol")).to.have.length(1);
    });
});