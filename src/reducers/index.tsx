import {SlideAction} from '../actions';
import {StoreState} from '../types/index';
import {CHANGE_SLIDE, NEXT_SLIDE, PREVIOUS_SLIDE, SET_SLIDE_VISITED} from '../constants/index';
import slides from '../components/SlideFixtures';

export function slide(state: StoreState, action: SlideAction): StoreState {
    switch (action.type) {
        case CHANGE_SLIDE:
            return {...state, currentSlide: action.id};
        case NEXT_SLIDE:
            return {...state, currentSlide: Math.min(slides.length-1, state.currentSlide + 1)};
        case PREVIOUS_SLIDE:
            return {...state, currentSlide: Math.max(0, state.currentSlide - 1)};
        case SET_SLIDE_VISITED:
            if (state.visited.some(x => x === state.currentSlide)) {
                return {...state}
            } else {
                return {...state, visited: state.visited.concat([state.currentSlide])};
            }
        default:
            return state;
    }
}