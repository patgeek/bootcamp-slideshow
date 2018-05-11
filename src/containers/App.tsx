import App from '../components/App';
import * as actions from '../actions/';
import { StoreState, Slide } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import slides from '../components/SlideFixtures';

// type StateProps = Pick<Slide, 'id' | 'mainTitle' | 'subTitle' | 'body' | 'type'>;
type DispatchProps = Pick<Slide, 'onChange' | 'onNext' | 'onPrevious'>;

export function mapStateToProps({ currentSlide }: StoreState) {
    return {
        id: slides[0].id,
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