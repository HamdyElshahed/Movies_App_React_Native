// @flow 
import {MovieReducer} from './movie'
export const Combain = (state={}, action) => {
    return {movies : MovieReducer(state.movies , action)}
};