import {testSlideList} from './TestFixtures';
import { shallow } from 'enzyme';
import { expect } from 'chai'


describe("SlideList renders", () => {
    it('should render the slide list border', () => {
        const wrapper = shallow(testSlideList);
        console.log(wrapper.debug());
        expect(wrapper.hasClass("slideListBorder")).to.equal(true);
    });

    it('should render the slide list content', () => {
        const wrapper = shallow(testSlideList);
        expect(wrapper.find("ul").hasClass("slideListContent")).to.equal(true);
    });

    it('should render the slide list buttons', () => {
        const wrapper = shallow(testSlideList);
        const numSlides = testSlideList.props.slides.length;
        expect(wrapper.find("SlideButton")).to.have.length(numSlides);
    });
});