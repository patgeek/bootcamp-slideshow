import App, {Props} from '../components/App';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
// import slides from '../components/SlideFixtures';

// type StateProps = Pick<Slide, 'id' | 'mainTitle' | 'subTitle' | 'body' | 'type'>;
type DispatchProps = Pick<Props, 'onChange' | 'onNext' | 'onPrevious'>;

export function mapStateToProps({ currentSlide, slides }: StoreState) {
    return {
        slideId: slides[currentSlide].id,
        slides,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SlideAction>): DispatchProps {
    return {
        onChange: (id: number) => (dispatch(actions.changeSlide(id))),
        onNext: () => (dispatch(actions.nextSlide())),
        onPrevious: () => (dispatch(actions.previousSlide())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);