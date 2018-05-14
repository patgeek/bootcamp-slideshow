import * as constants from '../constants';


export interface ChangeSlide {
    type: constants.CHANGE_SLIDE;
    id: number;
}

export interface NextSlide {
    type: constants.NEXT_SLIDE;
}

export interface PreviousSlide {
    type: constants.PREVIOUS_SLIDE;
}

export interface SetSlideVisited {
    type: constants.SET_SLIDE_VISITED;
}

export type SlideAction = ChangeSlide | NextSlide | PreviousSlide | SetSlideVisited;

export function changeSlide(id: number): ChangeSlide {
    return {
        type: constants.CHANGE_SLIDE,
        id,
    }
}

export function nextSlide(): NextSlide {
    return {
        type: constants.NEXT_SLIDE
    }
}

export function previousSlide(): PreviousSlide {
    return {
        type: constants.PREVIOUS_SLIDE
    }
}

export function setSlideVisited(): SetSlideVisited {
    return {
        type: constants.SET_SLIDE_VISITED
    }
}