import * as constants from '../constants';


export interface ChangeSlide {
    type: constants.CHANGE_SLIDE;
}

export interface NextSlide {
    type: constants.NEXT_SLIDE;
}

export interface PreviousSlide {
    type: constants.PREVIOUS_SLIDE;
}

export type SlideAction = ChangeSlide | NextSlide | PreviousSlide;

export function changeSlide(id: number): ChangeSlide {
    return {
        type: constants.CHANGE_SLIDE
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