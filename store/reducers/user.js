import * as actionTypes from '../actions/actionTypes';

const initialState = {
    imgUrl: 'https://media.licdn.com/dms/image/C5103AQH5WDn7Y5ImIQ/profile-displayphoto-shrink_100_100/0?e=1548892800&v=beta&t=crZ-OQoJpS37yPA7j-r4Vpd8TKzrTT3bYJaGpQRM-Jk'
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_USER_PICTURE:
            return {
                ...state,
                imgUrl: action.imgUrl
            }; 
        default:
            return state;
    }
};

export default reducer;