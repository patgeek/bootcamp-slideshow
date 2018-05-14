import { shallow } from 'enzyme';
import { expect } from 'chai'
import { testTitleContent, testTwoColContent, testSimpleContent } from './TestFixtures';


describe("Content navigation", () => {
    it('should only render next button', () => {
        const wrapper = shallow(testTitleContent);
        expect(wrapper.find('button [hidden=true]')).to.have.length(1);
    });

    it('should only render previous button', () => {
        const wrapper = shallow(testTwoColContent);
        expect(wrapper.find('button [hidden=true]')).to.have.length(1);
    });

    it('should render both buttons', () => {
        const wrapper = shallow(testSimpleContent);
        expect(wrapper.find('button')).to.have.length(2);
    });
});