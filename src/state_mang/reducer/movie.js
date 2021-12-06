// @flow 
// state={
//     movies,
//     details
// }
export const MovieReducer = (state={} , action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {...state, movies:action.payload }
        case 'GET_DETAILS':
            return {...state, details:action.payload }
        default:
            return state;
    }
    
};