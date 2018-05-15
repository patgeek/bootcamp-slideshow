import {testTitleContent} from './TestFixtures';
import { shallow } from 'enzyme';
import { expect } from 'chai'


describe("Content renders", () => {
    it('should render the content border', () => {
        const wrapper = shallow(testTitleContent);
        expect(wrapper.hasClass('contentBorder')).to.equal(true);
    });

    it('should render the slide border', () => {
        const wrapper = shallow(testTitleContent);
        expect(wrapper.find('.slideBorder')).to.have.length(1);
    });

    it('should render the nav border', () => {
        const wrapper = shallow(testTitleContent);
        expect(wrapper.find('.navBorder')).to.have.length(1);
    });
});