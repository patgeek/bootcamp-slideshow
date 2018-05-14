import App, {Props} from '../components/App';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
// import slides from '../components/SlideFixtures';

// type StateProps = Pick<Slide, 'id' | 'mainTitle' | 'subTitle' | 'body' | 'type'>;
type DispatchProps = Pick<Props, 'onChange' | 'onNext' | 'onPrevious' | 'onVisited' >;

export function mapStateToProps({ currentSlide, slides, visited }: StoreState) {
    return {
        slideId: slides[currentSlide].id,
        slides,
        visited,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SlideAction>): DispatchProps {
    return {
        onChange: (id: number) => (dispatch(actions.changeSlide(id))),
        onNext: () => (dispatch(actions.nextSlide())),
        onPrevious: () => (dispatch(actions.previousSlide())),
        onVisited: () => (dispatch(actions.setSlideVisited())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);