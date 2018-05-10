import {SlideAction} from '../actions';
import {StoreState} from '../types/index';
import {CHANGE_SLIDE, NEXT_SLIDE, PREVIOUS_SLIDE} from '../constants/index';

export function slide(state: StoreState, action: SlideAction): StoreState {
    switch (action.type) {
        case CHANGE_SLIDE:
            return {...state, currentSlide: state.currentSlide + 1};
        case NEXT_SLIDE:
            return {...state, currentSlide: state.currentSlide + 1};
        case PREVIOUS_SLIDE:
            return {...state, currentSlide: state.currentSlide - 1};
    }
}