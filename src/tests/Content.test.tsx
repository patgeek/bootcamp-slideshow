import Title from '../components/Title';
import Simple from '../components/Simple';
import *  as renderer from 'react-test-renderer';
import {testTitleContent, testSimpleContent} from './TestFixtures';


test('It can be rendered.', () => {
    const component = renderer.create(
        testTitleContent
    );
    expect(component.toJSON().children.length).toBeGreaterThan(0);
});

test('It can render a Title slide.', () => {
    const component = renderer.create(
        testTitleContent
    );
    const testInstance = component.root;
    expect(testInstance.findByType(Title));
});

test('It can render a Simple slide.', () => {
    const component = renderer.create(
        testSimpleContent
    );
    const testInstance = component.root;
    expect(testInstance.findByType(Simple));
});
